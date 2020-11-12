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
  const loading = useSelector((state) => state.resident.loading);

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
    <>
      <h1 className="title">Residents of {planet.name}</h1>
      <Grid
        loading={loading}
        data={{
          header: [
            { label: 'name', type: 'string' },
            { label: 'birth_year', type: 'string' },
            { label: 'gender', type: 'string' },
            { label: 'height', type: 'number' },
            { label: 'mass', type: 'number' },
            { label: 'skin_color', type: 'string' },
            { label: 'hair_color', type: 'string' },
            { label: 'eye_color', type: 'string' }
          ],
          values: residents
        }}
      />
    </>
  );
}
