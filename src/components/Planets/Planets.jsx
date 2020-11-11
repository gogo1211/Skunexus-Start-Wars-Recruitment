import './Planets.css';

import Grid from '../Grid';

function Planets({ loading, items }) {
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
