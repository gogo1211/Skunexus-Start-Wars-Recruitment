import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import './Planets.css';

function Planets({ loading, items, fields }) {
  const dispatch = useDispatch();

  const data = {
    header: fields,
    values: items,
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

Planets.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  fields: PropTypes.array
};

Planets.defaultProps = {
  loading: false,
  items: [],
  fields: [
    { label: 'name', type: 'string' },
    { label: 'rotation_period', type: 'number' },
    { label: 'orbital_period', type: 'number' },
    { label: 'diameter', type: 'number' },
    { label: 'climate', type: 'string' },
    { label: 'gravity', type: 'string' },
    { label: 'terrain', type: 'string' },
    { label: 'surface_water', type: 'number' },
    { label: 'population', type: 'string' }
  ]
};

export default Planets;
