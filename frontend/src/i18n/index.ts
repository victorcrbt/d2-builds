import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector, {
  DetectorOptions,
} from 'i18next-browser-languagedetector';

import resources from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    } as DetectorOptions,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
