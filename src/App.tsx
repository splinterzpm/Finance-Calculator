import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import Account from './Account';
import Accounts from './components/Accounts/Accounts';
import AddAccount from './components/Accounts/AddAccount';
import AccountsBar from './components/Accounts/AccountsBar';
import Transaction from './components/Transactions/Transaction';
import Transactions from './components/Transactions/Transactions';
import AddTransaction from './components/Transactions/AddTransaction';
import NotFound from './components/NotFound';

import "../node_modules/materialize-css/sass/materialize.scss";

interface Props {}

interface State {
  accountList: Array<Account>,
  transactionList: Array<Transaction>
};

class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
        accountList: [
          new Account(1, 'account1', 25.00),
          new Account(2, 'account2', 50.75),
          new Account(3, 'account3', 43.75),
        ],
        transactionList: [
          new Transaction(1, 'account1', 'Рестораны',"McDonald's")
        ]
    };
  };

  handleCreateAccount = (account: Account) => {
    const newAccList = this.state.accountList;
    newAccList.push(account);
    this.setState({ accountList: newAccList });
  }

  handleCreateTransaction = (transaction: Transaction) => {
    const newTransList = this.state.transactionList;
    newTransList.push(transaction);
    this.setState({ transactionList: newTransList });
  }

  render() {
    return (
      <Router>
          <nav>
            <div className="nav-wrapper blue-grey darken-3">
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
                <li>
                  <Link to="/Transactions/Add">Add Transaction</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <AccountsBar accountList={this.state.accountList}/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Accounts/Add" render={(props) => <AddAccount handleCreateAccount={this.handleCreateAccount} />} />
            <Route path="/Accounts" render={(props) => <Accounts accountList={this.state.accountList} />} />
            <Route path="/Transactions/Add" render={(props) => <AddTransaction handleCreateTransaction={this.handleCreateTransaction} accountList={this.state.accountList}/>} />
            <Route path="/Transactions" render={(props) => <Transactions transactionList={this.state.transactionList} />} />            
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}

export default App;