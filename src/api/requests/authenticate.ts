import { ScTemplate, ScType } from 'ts-sc-client';

import { client, scUtils } from '@api';
import { Action } from '@api/sc/actions/Action';

interface IRequest {
  login: string;
  password: string;
}

export const authenticateUser = async (req: IRequest): Promise<boolean> => {
  console.log(req);

  const action = new Action('action_authenticate_user');

  const loginLink = await scUtils.createLink(req.login);
  const passwordLink = await scUtils.createLink(req.password);

  if (loginLink && passwordLink) {
    action.addArgs(loginLink, passwordLink);
  }

  const actionNode = await action.initiate();

  if (!actionNode) return false;

  const answer = await scUtils.getAnswer(actionNode);

  if (!answer) return false;

  const { conceptAuthorisedUser } = await scUtils.findKeynodes('concept_authorised_user');

  const userAlias = '_user_alias';

  const userTemplate = new ScTemplate();
  userTemplate.triple(answer, ScType.EdgeAccessVarPosPerm, [ScType.NodeConst, userAlias]);
  userTemplate.triple(conceptAuthorisedUser, ScType.EdgeAccessVarPosPerm, userAlias);

  const linkRes = await client.templateSearch(userTemplate);

  if (!linkRes.length) return false;

  return true;
};
