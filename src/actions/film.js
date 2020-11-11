export const LOAD_FILMS_FOR_PLANET = 'films/loadFilmsForPlanet';
export const LOAD_FILMS_FOR_PLANET_SUCCESS = 'films/loadFilmsForPlanetSuccess';
export const LOAD_FILMS_FOR_PLANET_ERROR = 'films/loadFilmsForPlanetError';

export function loadFilmsForPlanet(planet) {
  return {
    type: LOAD_FILMS_FOR_PLANET,
    planet
  };
}

export function loadFilmsForPlanetSuccess(payload) {
  return {
    type: LOAD_FILMS_FOR_PLANET_SUCCESS,
    payload
  };
}

export function loadFilmsForPlanetError(error) {
  return {
    type: LOAD_FILMS_FOR_PLANET_ERROR,
    error
  };
}
