import React, { Component } from 'react';
import Account from '../Account';
import AccountItem from './AccountItem';
import { Link } from 'react-router-dom';
import '../scss/Account.scss';

interface Props {
    accountList: Array<Account>
}

interface State {

}

class AccountsBar extends Component <Props, State> {

    render() {
        console.log(this.props.accountList);
        return (
            <div className="AccountsBar">
                <div className="AccountListItems">
                    {this.props.accountList.map((account) => (
                    <AccountItem key={`account_${account.id}`} account={account} />
                    ))}
                    <Link className="waves-effect waves-light btn cyan lighten-1 AccBtn" to="/Accounts/Add">Add Account</Link>
                    <Link className="waves-effect waves-light btn cyan lighten-1 AddTransBtn" to="/Transaction/Add">Add Transaction</Link>
                </div>
            </div>
        );
    }
}

export default AccountsBar;