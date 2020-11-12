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
  const loading = useSelector((state) => state.film.loading);

  useEffect(() => {
    if (planet) {
      dispatch(loadFilmsForPlanet(planet));
    } else {
      dispatch(replace('/'));
    }
  }, []);

  if (!planet) {
    return <>Sorry</>;
  }

  console.log(loading)

  return (
    <>
      <h1 className="title">Films of {planet.name}</h1>
      <Grid
        loading={loading}
        data={{
          header: [
            { label: 'title', type: 'string' },
            { label: 'director', type: 'string' },
            { label: 'producer', type: 'string' },
            { label: 'episode_id', type: 'number' },
            { label: 'release_date', type: 'string' },
            { label: 'opening_crawl', type: 'string' }
          ],
          values: films
        }}
      />
    </>
  );
}
