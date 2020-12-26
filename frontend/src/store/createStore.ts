import {
  compose,
  createStore,
  applyMiddleware,
  Middleware,
  AnyAction,
  Store,
} from 'redux';

export default <T>(reducers: any, middlewares: Middleware[]): Store<T> => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore<T, AnyAction, {}, {}>(reducers, enhancer);
};
