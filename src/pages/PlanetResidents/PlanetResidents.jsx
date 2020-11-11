import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'connected-react-router';

import { matchPalentSelector, matchPlanetResidentsSelector } from '../../selectors';
import { loadResidentsForPlanet } from '../../actions';
import Grid from '../../components/Grid/Grid';

export default function PlanetResidents() {
  const dispatch = useDispatch();
  const planet = useSelector(matchPalentSelector);
  const residents = useSelector(matchPlanetResidentsSelector);
  const { loading } = useSelector((state) => state.film.loading);

  useEffect(() => {
    if (planet) {
      dispatch(loadResidentsForPlanet(planet));
    } else {
      dispatch(replace('/'));
    }
  }, []);

  if (!planet) {
    return <>Sorry</>;
  }

  return (
    <div className="App">
      <h1>Residents of {planet.name}</h1>
      <Grid
        loading={loading}
        data={{
          header: [
            'name',
            'birth_year',
            'gender',
            'height',
            'mass',
            'skin_color',
            'hair_color',
            'eye_color'
          ],
          values: residents
        }}
      />
    </div>
  );
}
