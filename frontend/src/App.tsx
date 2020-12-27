import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import '@config/Reactotron';
import i18n from '@i18n/index';
import { store, persistor } from '@store/index';

import {
  PORTUGUESE_LANGUAGE,
  ENGLISH_LANGUAGE,
} from '@constants/i18n/languages';
import { CHANGE_LANGUAGE } from '@constants/i18n/general';
import usePersisTheme from '@hooks/usePersistTheme';

import Hello from '@components/Hello';
import darkTheme from './styles/themes/dark';
import ligthTheme from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = usePersisTheme<DefaultTheme>(darkTheme);

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

  const toggleTheme = useCallback(
    () => {
      setTheme(theme.name === 'light' ? darkTheme : ligthTheme);
    },
    []
  )

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Hello />

          <button onClick={changeLanguage}>{t(CHANGE_LANGUAGE)}</button>
          <button onClick={toggleTheme}>trocar tema</button>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
