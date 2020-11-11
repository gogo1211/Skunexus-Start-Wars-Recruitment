import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import App from './App';
import PlanetDetail from './PlanetDetail';
import PlanetFilms from './PlanetFilms';

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/planets/:id" component={PlanetDetail} />
        <Route exact path="/planets/:id/films" component={PlanetFilms} />
        <Redirect path="/" to="/" />
      </Switch>
    </ConnectedRouter>
  );
}
