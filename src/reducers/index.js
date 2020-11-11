import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import simple, { simpleState } from './simple';
import planet, { planetState } from './planet';
import film, { filmState } from './film';
import resident, { residentState } from './resident';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    simple,
    planet,
    film,
    resident
  });

export const initialState = {
  simple: simpleState,
  planet: planetState,
  film: filmState,
  resident: residentState
};

export default rootReducer;
