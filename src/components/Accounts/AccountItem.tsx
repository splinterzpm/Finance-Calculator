import React, { Component } from 'react';

import Account from "../../Account";

import '../../scss/Account.scss';

interface Props {
    account: Account
}

class AccountItem extends Component<Props, any>{

    render() {
        if ( Math.sign(this.props.account.balance) === -1 )
        return (
            <div className="AccountListItems">
                <span className="AccountItem"> {this.props.account.name} </span> 
                <span className="AccountItem"> {'-$'+ Math.abs(this.props.account.balance) } </span> 
            </div>
        );
        else
        return (
            <div className="AccountListItems">
                <span className="AccountItem"> {this.props.account.name} </span> 
                <span className="AccountItem"> ${this.props.account.balance} </span> 
            </div>
        );
    }
}

export default AccountItem;