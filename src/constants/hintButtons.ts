import { getHistoryOfIMS, getWhatIsGraph, getWhatIsIMS } from '@api/requests/getDescription';
import { TLanguage, TTexts } from 'ostis-ui-lib';

export const hintButtons: { text: TTexts; handler: () => Promise<string | null> }[] = [
  {
    text: { ru: 'Что ты можешь?', en: 'What can you do?' },
    handler: () => Promise.resolve(null),
  },
  {
    text: { ru: 'Что такое IMS?', en: 'What is IMS' },
    handler: getWhatIsIMS,
  },
  {
    text: { ru: 'Что такое граф?', en: 'What is a graph?' },
    handler: getWhatIsGraph,
  },
  {
    text: { ru: 'Расскажи про историю развития IMS', en: 'Tell me about the history of IMS ' },
    handler: getHistoryOfIMS,
  },
];

export const getHintButtonHandler = (
  lang: TLanguage,
  query: string,
): (() => Promise<string | null>) => {
  const matchedButton = hintButtons.find((button) => button.text[lang] == query.trim());

  if (matchedButton) {
    return matchedButton.handler;
  } else {
    return () => Promise.resolve(null);
  }
};
