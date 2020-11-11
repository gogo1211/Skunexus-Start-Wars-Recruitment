import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';
import _ from 'lodash';

const matchSelector = createMatchSelector({ path: '/planets/:id' });

export const planetsSelector = (state) => _.flatMap(state.planet.itemsByPage);
export const filmsSelector = (state) => state.film.itemsByPlanet;
export const residentsSelector = (state) => state.resident.itemsByPlanet;

export const matchPalentSelector = createSelector(
  matchSelector,
  planetsSelector,
  (match, planets) => planets.find((planet) => planet.id === match.params.id)
);

export const matchPlanetFilmsSelector = createSelector(
  matchSelector,
  filmsSelector,
  (match, films) => films[match.params.id]
);

export const matchPlanetResidentsSelector = createSelector(
  matchSelector,
  residentsSelector,
  (match, films) => films[match.params.id]
);
