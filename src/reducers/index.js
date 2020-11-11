import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import simple, { simpleState } from './simple';
import planet, { planetState } from './planet';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    simple,
    planet
  });

export const initialState = {
  simple: simpleState,
  planet: planetState
};

export default rootReducer;
