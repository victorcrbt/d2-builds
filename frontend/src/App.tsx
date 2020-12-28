import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Router } from 'react-router-dom';

import '@config/Reactotron';
import { store, persistor } from '@store/index';

import usePersisTheme from '@hooks/usePersistTheme';

import Routes from './router';
import history from './services/history';

import darkTheme from './styles/themes/dark';

const App: React.FC = () => {
  const [theme] = usePersisTheme<DefaultTheme>(darkTheme);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
