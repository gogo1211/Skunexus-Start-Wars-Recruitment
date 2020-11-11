import { call, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { fetchFilmsForPlanet, fetchPlanets } from './utils/api';

function* requestLoadPlanets(action) {
  try {
    const res = yield call(fetchPlanets, action.page);
    yield put(
      Actions.loadPlanetsSuccess({
        [action.page]: res.items
      })
    );
  } catch (error) {
    yield put(Actions.loadPlanetsError(error));
  }
}

function* requestLoadFilmsByPlanet(action) {
  try {
    const res = yield call(fetchFilmsForPlanet, action.planet);
    yield put(
      Actions.loadFilmsForPlanetSuccess({
        [action.planet.id]: res
      })
    );
  } catch (error) {
    yield put(Actions.loadFilmsForPlanetError(error));
  }
}

export default function* root() {
  yield takeEvery(Actions.LOAD_PLANETS, requestLoadPlanets);
  yield takeEvery(Actions.LOAD_FILMS_FOR_PLANET, requestLoadFilmsByPlanet);
}
