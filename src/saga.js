import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import { fetchPlanets } from './utils/api';

function* requestLoadPlanets(action) {
  const res = yield call(fetchPlanets, action.page);
  if (res.items) {
    yield put(Actions.loadPlanetsSuccess({ [action.page]: res.items }));
  } else {
    yield put(Actions.loadPlanetsError(res));
  }
}

export default function* root() {
  yield takeLatest(Actions.LOAD_PLANETS, requestLoadPlanets);
}
