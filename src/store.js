import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';

import rootReducer, { initialState } from './reducers';
import rootSaga from './saga';

export const history = createBrowserHistory();

export default function configureStore(additionalState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [routerMiddleware(history), sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer(history),
    { ...initialState, ...additionalState },
    enhancer
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
