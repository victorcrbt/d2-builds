import createSagaMiddleware, { SagaMonitor } from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducers from './persistReducers';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { ApplicationState } from './types';

const sagaMonitor: SagaMonitor = (process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null) as SagaMonitor;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore<ApplicationState>(
  persistReducers(rootReducer),
  middlewares
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
