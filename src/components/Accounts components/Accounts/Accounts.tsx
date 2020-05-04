import React, { Component } from 'react';

import Account from '../Account';
import AccountItem from '../AccountItem/AccountItem';

import './Accounts.scss';


interface Props {
    accountList: Array<Account>
};

interface State { };

class Accounts extends Component<Props, State> {

    render() {
        return (
            <div className="account-list">
                <div className="account-list-items">
                    {
                        this.props.accountList.map((account) => (
                            <AccountItem key={`account_${account.id}`} account={account} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Accounts;