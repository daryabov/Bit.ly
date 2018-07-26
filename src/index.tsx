import createHistory from 'history/createBrowserHistory';
import List from 'Pages/List';
import Main from 'Pages/Main';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router,  Switch } from 'react-router-dom';
import redirectOutside from 'Utils/redirect';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/list' component={List} />
        <Route exact={true} path='/' component={Main} />
        <Route path='/:index' render={redirectOutside(store)}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
