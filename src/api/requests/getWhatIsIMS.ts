import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';

export const getWhatIsIMS = async () => {
  const { uiMenuSummary, knowledgeBaseIMS } = await scUtils.findKeynodes(
    'ui_menu_summary',
    'knowledge_base_IMS',
  );

  const commandResult = await doCommand(uiMenuSummary.value, knowledgeBaseIMS.value);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  if (!answer) return null;

  const linkAlias = '_link';
  const linkTemplate = new ScTemplate();
  linkTemplate.triple(answer, ScType.EdgeAccessVarPosPerm, [ScType.LinkVar, linkAlias]);

  const linkRes = await client.templateSearch(linkTemplate);

  if (!linkRes.length) return null;

  const linkAddr = linkRes[0].get(linkAlias);

  const contents = await client.getLinkContents([linkAddr]);
  const content = contents[0].data;

  return String(content);
};
