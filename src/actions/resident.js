export const LOAD_RESIDENTS_FOR_PLANET = 'films/loadResidentsForPlanet';
export const LOAD_RESIDENTS_FOR_PLANET_SUCCESS = 'films/loadResidentsForPlanetSuccess';
export const LOAD_RESIDENTS_FOR_PLANET_ERROR = 'films/loadResidentsForPlanetError';

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
