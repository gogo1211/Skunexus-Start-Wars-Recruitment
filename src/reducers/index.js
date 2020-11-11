import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import simple, { simpleState } from './simple';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    simple
  });

export const initialState = {
  simple: simpleState
};

export default rootReducer;
