import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Transaction from './Transaction';
import NotFound from './NotFound';
import Home from './Home';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Accounts from './Accounts';
import Account from './Account';

class App extends React.Component {
  render() {
    return (
      <Router>
          <nav>
            <div className="nav-wrapper cyan lighten-1">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <Link to="/" className="brand-logo right">FinCalc</Link>
                </li>
                <li>
                  <Link to="/Account">Add Account</Link>
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
          <div >
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Account" component={Account} />
            <Route path="/Accounts" component={Accounts} />
            <Route path="/Transactions" component={Transaction} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export default App;
serviceWorker.unregister();
