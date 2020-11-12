export const LOAD_RESIDENTS_FOR_PLANET = 'residents/loadResidentsForPlanet';
export const LOAD_RESIDENTS_FOR_PLANET_SUCCESS = 'residents/loadResidentsForPlanetSuccess';
export const LOAD_RESIDENTS_FOR_PLANET_ERROR = 'residents/loadResidentsForPlanetError';

export function loadResidentsForPlanet(planet) {
  return {
    type: LOAD_RESIDENTS_FOR_PLANET,
    planet
  };
}

export function loadResidentsForPlanetSuccess(payload) {
  return {
    type: LOAD_RESIDENTS_FOR_PLANET_SUCCESS,
    payload
  };
}

export function loadResidentsForPlanetError(error) {
  return {
    type: LOAD_RESIDENTS_FOR_PLANET_ERROR,
    error
  };
}
