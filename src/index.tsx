import createHistory from 'history/createBrowserHistory';
import Main from 'Pages/Main';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
