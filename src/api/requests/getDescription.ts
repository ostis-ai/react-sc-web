import { ScAddr } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';
import { searchAddrById } from '@api/sc/search/search';

export const getWhatIsIMS = async () => {
  const { knowledgeBaseIMS } = await scUtils.findKeynodes('knowledge_base_IMS');
  return getDescriptionByAddr(knowledgeBaseIMS.value);
};

export const getHistoryOfIMS = async () => {
  const { historyOfDevelopmentIMS } = await scUtils.findKeynodes('history_of_development_IMS');
  return getDescriptionByAddr(historyOfDevelopmentIMS.value);
};

export const getWhatIsGraph = async () => {
  const { sectionQuestionsOnTheDisciplineMOIS } = await scUtils.findKeynodes(
    'section_questions_on_the_discipline_MOIS',
  );
  return getDescriptionByAddr(sectionQuestionsOnTheDisciplineMOIS.value);
};

export const getWhatIsSingleton = async () => {
  const { singleton } = await scUtils.findKeynodes('singleton');
  return getDescriptionByAddr(singleton.value);
};

export const getWhatIsSetTheory = async () => {
  const { setTheory } = await scUtils.findKeynodes('set_theory');
  return getDescriptionByAddr(setTheory.value);
};

export const getDescriptionByAddr = async (elementAddr: number) => {
  const { uiMenuSummary } = await scUtils.findKeynodes('ui_menu_summary');

    console.log(elementAddr, elementAddr, uiMenuSummary)

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};

export const getDescriptionById = async (str: string) => {
  const { uiMenuSummary } = await scUtils.findKeynodes('ui_menu_summary');

  console.log(str, uiMenuSummary)
  const elementAddr = await searchAddrById(str);
  if (!elementAddr) return null;

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr.value);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};
