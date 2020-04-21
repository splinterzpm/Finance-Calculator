import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './NotFound';
import Home from './Home';
import Account from './Account';
import Transaction from './Transaction';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <nav>
          <div className="nav-wrapper cyan lighten-1">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to="/" className="brand-logo right">FinCalc</Link>
              </li>
              <li>
                <Link to="/Accounts">Accounts</Link>
              </li>
              <li>
                <Link to="/Transactions">Transactions</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Accounts" component={Account} />
              <Route path="/Transactions" component={Transaction} />
              <Route component={NotFound} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
