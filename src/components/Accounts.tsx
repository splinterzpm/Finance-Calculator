import React, { Component } from 'react';
import Account from '../Account';
import AccountItem from './AccountItem';
import '../scss/Account.scss';

interface Props {
    accountList: Array<Account>
}

interface State {

}

class Accounts extends Component <Props, State> {

    render() {
        console.log(this.props.accountList);
        return (
            <div className="AccountList">
                <div className="AccountListItems">
                    {this.props.accountList.map((account) => (
                    <AccountItem key={`account_${account.id}`} account={account} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Accounts;