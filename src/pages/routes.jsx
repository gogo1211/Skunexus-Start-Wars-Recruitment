import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import App from './App';

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect path="/" to="/" />
      </Switch>
    </ConnectedRouter>
  );
}
