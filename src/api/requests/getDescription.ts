import { ScAddr } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';

export const getWhatIsIMS = async () => {
  const { knowledgeBaseIMS } = await scUtils.findKeynodes('knowledge_base_IMS');
  return getDescriptionOfElement(knowledgeBaseIMS.value);
};

export const getHistoryOfIMS = async () => {
  const { historyOfDevelopmentIMS } = await scUtils.findKeynodes('history_of_development_IMS');
  return getDescriptionOfElement(historyOfDevelopmentIMS.value);
};

export const getWhatIsGraph = async () => {
  const { sectionQuestionsOnTheDisciplineMOIS } = await scUtils.findKeynodes(
    'section_questions_on_the_discipline_MOIS',
  );
  return getDescriptionOfElement(sectionQuestionsOnTheDisciplineMOIS.value);
};

export const getWhatIsSingleton = async () => {
  const { singleton } = await scUtils.findKeynodes('singleton');
  return getDescriptionOfElement(singleton.value);
};

export const getWhatIsSetTheory = async () => {
  const { setTheory } = await scUtils.findKeynodes('set_theory');
  return getDescriptionOfElement(setTheory.value);
};

export const getDescriptionOfElement = async (elementAddr: number) => {
  const { uiMenuSummary } = await scUtils.findKeynodes('ui_menu_summary');

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  console.log(answer);

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};
