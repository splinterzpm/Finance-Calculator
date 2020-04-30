import React, { Component } from 'react';

import Account from "../../Account";

interface Props {
    account: Account['name']
};

class TransactionAccountItem extends Component<Props, any>{

    render() {
        return (
                <span className="AccountItem"> {this.props.account} </span>
        );
    }
}

export default TransactionAccountItem;