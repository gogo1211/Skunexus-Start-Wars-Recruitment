import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import './Planets.css';

import Grid from '../Grid';

function Planets({ loading, items }) {
  const dispatch = useDispatch();

  const data = {
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
        show: () => true,
        action: (row) => dispatch(push(`/planets/${row.id}`))
      },
      {
        label: 'Go to Films',
        show: (row) => row.films.length,
        action: (row) => dispatch(push(`/planets/${row.id}/films`))
      },
      {
        label: 'Go to Residents',
        show: (row) => row.residents.length,
        action: (row) => dispatch(push(`/planets/${row.id}/residents`))
      }
    ]
  };

  return <Grid loading={loading} data={data} />;
}

export default Planets;
