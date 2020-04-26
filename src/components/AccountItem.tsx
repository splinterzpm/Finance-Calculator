import React, { Component } from 'react';
import Account from "../Account";
import '../scss/Account.scss';

interface Props {
    account: Account
}

class AccountItem extends Component <Props, any>{

    render() {
        return (
            <div className="row">
                <span className="AccountItem"> {this.props.account.id} </span> 
                <span className="AccountItem"> {this.props.account.name} </span> 
                <span className="AccountItem"> {this.props.account.balance} </span> 
            </div>
        );
    }
}

export default AccountItem;