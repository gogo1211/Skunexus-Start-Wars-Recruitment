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
        action: (row) => dispatch(push(`/planets/${row.id}`))
      },
      {
        label: 'Go to Films',
        action: (row) => dispatch(push(`/planets/${row.id}/films`))
      },
      {
        label: 'Go to Residents',
        action: (row) => dispatch(push(`/planets/${row.id}/residents`))
      }
    ]
  };

  return <Grid loading={loading} data={data} />;
}

export default Planets;
