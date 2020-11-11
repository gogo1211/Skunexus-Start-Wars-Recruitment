import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import './Planets.css';

import Grid from '../Grid';

function Planets({ loading, items }) {
  const dispatch = useDispatch();

  const data = {
    header: [
      { label: 'name', type: 'string' },
      { label: 'rotation_period', type: 'number' },
      { label: 'orbital_period', type: 'number' },
      { label: 'diameter', type: 'number' },
      { label: 'climate', type: 'string' },
      { label: 'gravity', type: 'string' },
      { label: 'terrain', type: 'string' },
      { label: 'surface_water', type: 'number' },
      { label: 'population', type: 'string' },
      { label: 'films', type: 'number' },
      { label: 'residents', type: 'number' }
    ],
    values: items.map(({ films, residents, ...other }) => ({
      ...other,
      films: films.length,
      residents: residents.length
    })),
    actions: [
      {
        label: 'Go to Detail',
        show: () => true,
        action: (row) => dispatch(push(`/planets/${row.id}`))
      },
      {
        label: 'Go to Films',
        show: (row) => row.films,
        action: (row) => dispatch(push(`/planets/${row.id}/films`))
      },
      {
        label: 'Go to Residents',
        show: (row) => row.residents,
        action: (row) => dispatch(push(`/planets/${row.id}/residents`))
      }
    ]
  };

  return <Grid loading={loading} data={data} />;
}

export default Planets;
