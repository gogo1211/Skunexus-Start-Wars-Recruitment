import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPlanets, setPage } from '../../actions';
import Planets from '../../components/Planets';
import Modal from '../../components/Modal';
import PlanetForm from '../../components/PlanetForm';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, itemsByPage, page } = useSelector((state) => state.planet);
  const [selectedPlanet, setSelectedPlanet] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState('');

  useEffect(() => {
    dispatch(loadPlanets(1));
  }, [dispatch]);

  const changePage = (page) => {
    dispatch(setPage(page));
    if (!itemsByPage[page]) {
      dispatch(loadPlanets(page));
    }
  };

  const handleAddNewPlanet = () => {
    setSelectedPlanet({
      name: '',
      rotation_period: 0,
      orbital_period: 0,
      diameter: 0,
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: 0
    });
    setOpenModal(true);
  };

  const handleSubmit = (newPlanet) => {
    console.log(newPlanet);
    setOpenModal(false);
    setConfirmModal((Math.random() * 20) % 2 ? 'success' : 'failed');
  };

  return (
    <div className="App">
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <h1 className="title">Star Wars Planets</h1>
        <button className="button is-primary is-small" onClick={handleAddNewPlanet}>
          Add New Planet
        </button>
      </div>
      <Planets
        loading={loading}
        items={
          itemsByPage[page] &&
          itemsByPage[page].map(({ films, residents, ...other }) => ({
            ...other,
            films: films.length,
            residents: residents.length
          }))
        }
        fields={[
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
        ]}
      />
      <nav
        className="pagination is-centered is-rounded p-4"
        role="navigation"
        aria-label="pagination"
      >
        <button
          className="pagination-previous"
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <ul className="pagination-list">
          <li className="pagination-link is-current">{page}</li>
        </ul>
        <button
          className="pagination-next"
          onClick={() => changePage(page + 1)}
          disabled={!itemsByPage[page]}
        >
          Next
        </button>
      </nav>
      <Modal title="Add Planet" open={openModal} onClose={() => setOpenModal(false)}>
        <PlanetForm
          planet={selectedPlanet}
          onSubmit={handleSubmit}
          onCancel={() => setOpenModal(false)}
        />
      </Modal>
      <Modal title="Add New Planet" open={!!confirmModal} onClose={() => setConfirmModal('')}>
        {confirmModal === 'success'
          ? 'New Planet is successfully added!'
          : 'New Planet is not added!'}
      </Modal>
    </div>
  );
}

export default App;
