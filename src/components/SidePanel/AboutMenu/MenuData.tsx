import AboutMetasystem from '@assets/docs/AboutMetasystem.md';
import AboutOSTIS from '@assets/docs/AboutOSTIS.md';
import Contacts from '@assets/docs/Contacts.md';
import RepositoriesOverview from '@assets/docs/RepositoriesOverview.md';
import ScMachineBuildAndContributionGuide from '@assets/docs/ScMachineBuildAndContributionGuide.md';
import StandardBuildAndContributionGuide from '@assets/docs/StandardBuildAndContributionGuide.md';
import { IRawMenuItem } from './Menu';

export const rawMenuItems: IRawMenuItem[] = [
  {
    title: { en: '', ru: 'Общее описание Технологии OSTIS' },
    text: {
      en: '',
      ru: AboutOSTIS,
    },
    children: null,
  },
  {
    title: { en: '', ru: 'Общее описание Метасистемы OSTIS' },
    text: {
      en: '',
      ru: AboutMetasystem,
    },
    children: null,
  },
  {
    title: { en: '', ru: 'Руководства по разработке ключевых компонентов Технологии OSTIS' },
    text: {
      en: '',
      ru: RepositoriesOverview,
    },
    expanded: false,
    children: [
      {
        title: { en: '', ru: 'Стандарт Технологии OSTIS' },
        text: {
          en: '',
          ru: StandardBuildAndContributionGuide,
        },
        children: null,
      },
      {
        title: { en: '', ru: 'SC-машина' },
        text: {
          en: '',
          ru: ScMachineBuildAndContributionGuide,
        },
        children: null,
      },
    ],
  },
  {
    title: { en: '', ru: 'Каналы связи с разработчиками Технологии OSTIS' },
    text: {
      en: '',
      ru: Contacts,
    },
    expanded: false,
  },
];
