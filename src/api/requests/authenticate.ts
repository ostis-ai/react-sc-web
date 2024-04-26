import { type ScAddr } from 'ts-sc-client';

import { scUtils } from '@api';
import { Action } from '@api/sc/actions/Action';

interface IRequest {
  login: string;
  password: string;
}

export const authenticateUser = async (req: IRequest): Promise<ScAddr> => {
  const action = new Action('action_authorise_user');

  const loginLink = await scUtils.createLink(req.login);
  const passwordLink = await scUtils.createLink(req.password);

  if (loginLink && passwordLink) {
    action.addArgs(loginLink, passwordLink);
  }

  const resp = await action.initiate();

  if (!resp) throw new Error('unauthenticated');

  return resp;
};
