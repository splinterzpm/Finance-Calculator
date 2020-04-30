import React, { Component } from 'react';

import Account from "../../Account";

interface Props {
    account: Account['name']
    handlePass: (account: Account['name']) => void
}

class TransactionAccountItem extends Component<Props, any>{

    render() {
        return (
                <span className="AccountItem"> {this.props.account} </span>
        );
    }
}

export default TransactionAccountItem;