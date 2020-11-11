import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';
import _ from 'lodash';

const matchSelector = createMatchSelector({ path: '/planets/:id' });

export const planetsSelector = (state) => _.flatMap(state.planet.itemsByPage);

export const matchPalentSelector = createSelector(
  matchSelector,
  planetsSelector,
  (match, planets) => planets.find((planet) => planet.id === match.params.id)
);
