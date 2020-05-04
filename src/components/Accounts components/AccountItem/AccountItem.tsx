import React, { Component } from 'react';

import Account from "../Account";

import './AccountItem.scss';

interface Props {
    account: Account
};

class AccountItem extends Component<Props, any>{

    render() {
        let { name, balance } = this.props.account;

        return (
            <div className="account-list-item">
                <span className="account-list-item__name"> {name} </span>
                <span className="account-list-item__balance">
                    {(balance >= 0 ? '$' : '-$') + Math.abs(balance)} </span>
            </div>
        );
    }
}

export default AccountItem;