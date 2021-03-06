import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import App from './App';
import PlanetDetail from './PlanetDetail';
import PlanetFilms from './PlanetFilms';
import PlanetResidents from './PlanetResidents';

export default function Routes() {
  return (
    <div className="container is-fluid py-2">
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/planets" component={App} />
          <Route exact path="/planets/:id" component={PlanetDetail} />
          <Route exact path="/planets/:id/films" component={PlanetFilms} />
          <Route exact path="/planets/:id/residents" component={PlanetResidents} />
          <Redirect path="/" to="/planets" />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}
