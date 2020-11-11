import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { matchPalentSelector } from '../../selectors';

export default function PlanetDetail() {
  const planet = useSelector(matchPalentSelector);
  return (
    <div>
      <div>Name: {planet.name}</div>
    </div>
  );
}
