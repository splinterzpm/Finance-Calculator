import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Account from './components/Accounts components/Account';
import Accounts from './components/Accounts components/Accounts/Accounts';
import AddAccount from './components/Accounts components/AddAccount/AddAccount';
import AccountsBar from './components/Accounts components/AccountsBar/AccountsBar';
import Transaction from './components/Transactions/Transaction';
import Transactions from './components/Transactions/Transactions/Transactions';
import AddTransaction from './components/Transactions/AddTransaction/AddTransaction';
import AddCategory from './components/Categories/AddCategory';
import NotFound from './components/NotFound';

import "../node_modules/materialize-css/sass/materialize.scss";
import Category from './components/Categories/Category';

interface Props { };

interface State {
  accountList: Array<Account>,
  transactionList: Array<Transaction>
  categories: Array<Category>
};

class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      categories: [
        new Category(0, 'Drinks'),
        new Category(1, 'Food')
      ],
      accountList: [
        new Account(0, 'account1', 25.00),
        new Account(1, 'account2', 50.75),
        new Account(2, 'account3', 43.75),
      ],
      transactionList: [
        new Transaction(0, 'account1', 150, 'Restaurants & Cafes', "McDonald's")
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

  handleCreateCategory = (category: Category) => {
    const newCategories = this.state.categories;
    newCategories.push(category);
    this.setState({ categories: newCategories });
  }

  // hydrateStateWithLocalStorage() {
  //   let key = '';
  //   for (key in this.state) {
  //     if (localStorage.hasOwnProperty(key)) {
  //       let value = localStorage.getItem(key);
  //       try {
  //         value = JSON.parse(value || '{}');
  //         this.setState({ [key]: value } as React.ComponentState);
  //       } catch (e) {
  //         this.setState({ [key]: value } as React.ComponentState);
  //       }
  //     }
  //   }
  // }

  // saveStateToLocalStorage(key: React.ComponentState) {
  //   for (key in this.state) {
  //     let value = localStorage.getItem(key);
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }
  // }

  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();
  //   window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
  // }

  render() {
    return (
      <Router>
        <nav className="nav-extended">
          <div className="nav-wrapper blue-grey darken-3">
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

          <div className="nav-content blue-grey darken-3">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <Link to="/Accounts/Add">Add Account</Link>
              </li>

              <li className="tab">
                <Link to="/Transactions/Add">Add Transaction</Link>
              </li>

              <li className="tab">
                <Link to="/AddCategory">Add Category</Link>
              </li>
            </ul>
          </div>
        </nav>

        <AccountsBar accountList={this.state.accountList} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Accounts/Add" render={(props) => <AddAccount handleCreateAccount={this.handleCreateAccount} />} />
          <Route path="/Accounts" render={(props) => <Accounts accountList={this.state.accountList} />} />
          <Route path="/Transactions/Add" render={(props) =>
            <AddTransaction handleCreateTransaction={this.handleCreateTransaction}
              accountList={this.state.accountList}
              categories={this.state.categories} />}
          />
          <Route path="/Transactions" render={(props) => <Transactions transactionList={this.state.transactionList} />} />
          <Route path="/AddCategory" render={(props) => <AddCategory handleCreateCategory={this.handleCreateCategory}
          categories={this.state.categories} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;