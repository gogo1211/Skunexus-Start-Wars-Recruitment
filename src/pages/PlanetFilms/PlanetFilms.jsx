import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'connected-react-router';

import { matchPalentSelector, matchPlanetFilmsSelector } from '../../selectors';
import { loadFilmsForPlanet } from '../../actions';
import Grid from '../../components/Grid/Grid';

export default function PlanetFilms() {
  const dispatch = useDispatch();
  const planet = useSelector(matchPalentSelector);
  const films = useSelector(matchPlanetFilmsSelector);
  const { loading } = useSelector((state) => state.film.loading);

  useEffect(() => {
    if (planet) {
      dispatch(loadFilmsForPlanet(planet));
    } else {
      dispatch(replace('/'));
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Films of {planet.name}</h1>
      <Grid
        loading={loading}
        data={{
          header: ['title', 'director', 'producer', 'episode_id', 'release_date', 'opening_crawl'],
          values: films
        }}
      />
    </div>
  );
}
