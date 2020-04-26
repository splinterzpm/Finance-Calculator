import React from 'react';
import Transaction from './components/Transaction';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Accounts from './components/Accounts';
import Account from './Account';
import AddAccount from './components/AddAccount';
import AccountsBar from './components/AccountsBar';

interface Props {
  
}

interface State {
  accountList: Array<Account>
}

class App extends React.Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
        accountList: [
          new Account(1, 'account1', 25.00),
          new Account(2, 'account2', 50.75),
          new Account(3, 'account3', 43.75),
        ]
    };

    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  handleCreateAccount = (account: Account) => {
    const newAccList = this.state.accountList;
    newAccList.push(account);
    this.setState({ accountList: newAccList });
  }

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
                  <Link to="/Accounts/Add">Add Account</Link>
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
          <AccountsBar accountList={this.state.accountList}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Accounts/Add" render={(props) => <AddAccount handleCreateAccount={this.handleCreateAccount} />} />
            <Route path="/Accounts" render={(props) => <Accounts accountList={this.state.accountList} />} />
            <Route path="/Transactions" component={Transaction} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}
  export default App;