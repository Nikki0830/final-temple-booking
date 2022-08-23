import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {TRANSLATIONS_AR} from './ar/translation';
import {TRANSLATIONS_EN} from './en/translation';
import {TRANSLATIONS_HI} from './hi/translation';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ar: {
        translation: TRANSLATIONS_AR,
      },
      hi: {
        translation: TRANSLATIONS_HI,
      },
    },
     fallbackLng:"hi"
  });

export default i18n;
