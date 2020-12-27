import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Account from '../Account';
import AccountItem from '../AccountItem/AccountItem';

import './AccountsBar.scss';

interface Props {
    accountList: Array<Account>
};

interface State { };

class AccountsBar extends Component<Props, State> {

    render() {
        return (
            <div className="accounts-bar">
                <div>
                    {
                        this.props.accountList.map((account) => (
                            <AccountItem key={`account_${account.id}`} account={account} />
                        ))
                    }
                    <Link className="waves-effect waves-light btn blue-grey darken-2 account-bar__button" to="/Accounts/Add">Add Account</Link>
                    <Link className="waves-effect waves-light btn blue-grey darken-2 account-bar__button_add-transaction" to="/Transactions/Add">Add Transaction</Link>
                </div>
            </div>
        );
    }
}

export default AccountsBar;