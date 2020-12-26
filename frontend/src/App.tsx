import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useTranslation } from 'react-i18next';

import '@config/Reactotron';
import i18n from '@i18n/index';
import { store, persistor } from '@store/index';

import {
  PORTUGUESE_LANGUAGE,
  ENGLISH_LANGUAGE,
} from '@constants/i18n/languages';
import { CHANGE_LANGUAGE } from '@constants/i18n/general';

import Hello from '@components/Hello';

const App: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = useCallback(
    () =>
      i18n.changeLanguage(
        i18n.language === PORTUGUESE_LANGUAGE
          ? ENGLISH_LANGUAGE
          : PORTUGUESE_LANGUAGE
      ),
    []
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Hello />

        <button onClick={changeLanguage}>{t(CHANGE_LANGUAGE)}</button>
      </PersistGate>
    </Provider>
  );
};

export default App;
