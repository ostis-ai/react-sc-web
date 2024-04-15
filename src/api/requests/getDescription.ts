import { ScAddr } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';
import { searchAddrById } from '@api/sc/search/search';
import { TLanguage, langToKeynode, snakeToCamelCase } from 'ostis-ui-lib';

const getLanguage = async (lang: TLanguage) => {
  const keynodes = await scUtils.findKeynodes(langToKeynode[lang]);
  return keynodes[snakeToCamelCase(langToKeynode[lang])];
};

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
  const { singletone } = await scUtils.findKeynodes('singletone');
  return getDescriptionByAddr(singletone.value);
};

export const getWhatIsSetTheory = async () => {
  const { setTheory } = await scUtils.findKeynodes('set_theory');
  return getDescriptionByAddr(setTheory.value);
};

export const getDescriptionByAddr = async (elementAddr: number) => {
  const { uiMenuSummary } = await scUtils.findKeynodes('ui_menu_summary');

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};

export const getDescriptionById = async (id: string, lang: TLanguage) => {
  const { uiMenuSummary } = await scUtils.findKeynodes('ui_menu_summary');

  const elementAddr = await searchAddrById(id);
  if (!elementAddr) return null;

  const foundLang = await getLanguage(lang);

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr.value, foundLang.value);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.question;
  const answer = await scUtils.getAnswer(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};
