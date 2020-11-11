import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPlanets } from '../../actions';
import Planets from '../../components/Planets';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state.planet);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadPlanets(1));
  }, [dispatch]);

  const changePage = (page) => {
    setPage(page);
    if (!items[page]) {
      dispatch(loadPlanets(page));
    }
  };

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets loading={loading} items={items[page]} />
      <div>
        <button onClick={() => changePage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span>{page}</span>
        <button onClick={() => changePage(page + 1)} disabled={!items[page]}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;