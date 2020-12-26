import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { PORTUGUESE_LANGUAGE } from '@constants/i18n/languages';

import resources from './translations';

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: PORTUGUESE_LANGUAGE,
  lng: PORTUGUESE_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
