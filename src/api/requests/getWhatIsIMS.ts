import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';

export const getWhatIsIMS = async () => {
  const { uiMenuSummary, knowledgeBaseIMS } = await scUtils.findKeynodes(
    'ui_menu_summary',
    'knowledge_base_IMS',
  );

  console.log(uiMenuSummary, knowledgeBaseIMS)

  const commandResult = await doCommand(uiMenuSummary.value, knowledgeBaseIMS.value);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  console.log(answer)

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  console.log(String(content))

  return String(content);
};

