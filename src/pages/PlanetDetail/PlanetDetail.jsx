import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'connected-react-router';

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
    <div>
      <div>Name: {planet.name}</div>
    </div>
  );
}
