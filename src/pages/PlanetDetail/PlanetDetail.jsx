import { useDispatch, useSelector } from 'react-redux';
import { push, replace } from 'connected-react-router';

import { matchPalentSelector } from '../../selectors';
import './PlanetDetail.css';

export default function PlanetDetail() {
  const dispatch = useDispatch();
  const planet = useSelector(matchPalentSelector);

  if (!planet) {
    dispatch(replace('/'));
    return <></>;
  }

  return (
    <div className="container is-max-desktop">
      <div class="card">
        <div class="card-content">
          <div className="title">{planet.name}</div>
          <div className="information-container">
            <div className="name">Rotation Period</div>
            <div className="value">{planet.rotation_period}</div>
            <div className="name">Orbital Period</div>
            <div className="value">{planet.orbital_period}</div>
            <div className="name">Diameter</div>
            <div className="value">{planet.diameter}</div>
            <div className="name">Climate</div>
            <div className="value">{planet.climate}</div>
            <div className="name">Gravity</div>
            <div className="value">{planet.gravity}</div>
            <div className="name">Terrain</div>
            <div className="value">{planet.terrain}</div>
            <div className="name">Surface Water</div>
            <div className="value">{planet.surface_water}</div>
            <div className="name">Population</div>
            <div className="value">{planet.population}</div>
            <div className="name">Films</div>
            <div className="value">{planet.films.length}</div>
            <div className="name">Residents</div>
            <div className="value">{planet.residents.length}</div>
          </div>
        </div>
        <footer class="card-footer">
          <a className="card-footer-item" onClick={() => dispatch(replace(`/`))}>
            Go to list
          </a>
          <a
            className="card-footer-item"
            onClick={() => dispatch(push(`/planets/${planet.id}/films`))}
          >
            Go to Films
          </a>
          <a
            className="card-footer-item"
            onClick={() => dispatch(push(`/planets/${planet.id}/residents`))}
          >
            Go to Residents
          </a>
        </footer>
      </div>
    </div>
  );
}
