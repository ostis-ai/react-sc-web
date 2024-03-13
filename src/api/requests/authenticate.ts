import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';

/*
interface IRequest {
  username: string;
  password: string;
}
*/

// TODO: change authenticate agent
//
// QUESTIONS:
// * Where to pass request?
//
export const authenticateUser = async (req: any) => {
  console.log(req);
  const { uiMenuViewAuthenticateUser } = await scUtils.findKeynodes(
    'ui_menu_view_authenticate_user',
  );

  const res = await doCommand(uiMenuViewAuthenticateUser.value);

  if (isAxiosError(res)) return null;

  const actionNode = new ScAddr(res.data.question);
  const answer = await scUtils.getAnswer(actionNode);

  if (!answer) return null;

  const targetLinkAlias = '_targetLink';
  const linkTemplate = new ScTemplate();
  linkTemplate.triple(answer, ScType.EdgeAccessVarPosPerm, [ScType.LinkVar, targetLinkAlias]);
  const linkRes = await client.templateSearch(linkTemplate);

  if (!linkRes.length) return null;

  const targetLinkAddr = linkRes[0].get(targetLinkAlias);
  const contents = await client.getLinkContents([targetLinkAddr]);
  const content = contents[0].data;

  return JSON.parse(String(content));
};
