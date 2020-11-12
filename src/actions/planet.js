export const LOAD_PLANETS = 'planets/loadPlanets';
export const LOAD_PLANETS_SUCCESS = 'planets/loadPlanetsSuccess';
export const LOAD_PLANETS_ERROR = 'planets/loadPlanetsError';
export const SET_PAGE = 'planets/setPage';

export function loadPlanets(page) {
  return {
    type: LOAD_PLANETS,
    page
  };
}

export function loadPlanetsSuccess(payload) {
  return {
    type: LOAD_PLANETS_SUCCESS,
    payload
  };
}

export function loadPlanetsError(error) {
  return {
    type: LOAD_PLANETS_ERROR,
    error
  };
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    page
  };
}
