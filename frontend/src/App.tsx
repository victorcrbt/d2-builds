import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@config/Reactotron';
import { store, persistor } from '@store/index';

import Hello from '@components/Hello';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Hello />
      </PersistGate>
    </Provider>
  );
};

export default App;
