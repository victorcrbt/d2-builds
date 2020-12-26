import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export default <T>(reducers: Reducer<T, { type: any; payload: any }>) =>
  persistReducer(
    {
      key: 'd2-builds',
      storage,
      whitelist: [],
    },
    reducers
  );
