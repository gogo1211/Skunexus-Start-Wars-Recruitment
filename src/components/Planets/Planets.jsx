import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
import './Planets.css';

import Grid from '../Grid';

function Planets({ loading, items }) {
  const dispatch = useDispatch();

  const data = {
    loading,
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: items,
    actions: [
      {
        label: 'Go to Detail',
        action: (row) => dispatch(replace(`/planets/${row.id}`))
      },
      {
        label: 'Go to Films',
        action: (row) => {
          console.log(`redirect to grid with ${row.films.length} Films`);
        }
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          console.log(`redirect to grid with ${row.residents.length} Residents`);
        }
      }
    ]
  };

  return <Grid data={data} />;
}

export default Planets;
