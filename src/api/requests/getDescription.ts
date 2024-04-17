import { ScAddr, ScConstruction, ScLinkContent, ScLinkContentType, ScType, ScClient, ScTemplate,} from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';
import { searchAddrById } from '@api/sc/search/search';
import { Action } from '@api/sc/actions/Action';
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
  const action = new Action('action_reply_to_message');
  const constr = new ScConstruction();
  constr.createLink(ScType.LinkConst, new ScLinkContent(id, ScLinkContentType.String));
  const [linkAddr] = await client.createElements(constr);

  const { conceptTextFile } = await scUtils.findKeynodes('concept_text_file');

  const textLinkTemplate = new ScTemplate();
  textLinkTemplate.triple(conceptTextFile, ScType.EdgeAccessVarPosPerm, linkAddr);

  const res = await client.templateGenerate(textLinkTemplate);

  await action.addArgs(linkAddr);

  const answerAddr = await action.initiate();

  if (!answerAddr) return null;

  const answerAlias = '_answerLink';
  const answerLinkTemplate = new ScTemplate();
  answerLinkTemplate.triple(answerAddr, ScType.EdgeAccessVarPosPerm, [
    ScType.NodeVar,
    answerAlias,
  ]);

  const answerLink = await client.templateSearch(answerLinkTemplate);

  if (!answerLink.length) return null;

  const answerLinkAddr = answerLink[0].get(answerAlias);


  const contents = await client.getLinkContents([answerLinkAddr]);
  const content = contents[0].data;

  return String(content);
};
