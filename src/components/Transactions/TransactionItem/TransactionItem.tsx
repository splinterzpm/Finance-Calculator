import React, { Component } from 'react';
import Transaction from "../Transaction";

import './TransactionItem.scss';

interface Props {
    transaction: Transaction
}

class TransactionItem extends Component<Props, any>{

    render() {
        return (
            <div className="collection-item blue-grey darken-2 transaction-item-list">
                <div className="transaction-item-list__items">
<<<<<<< HEAD:src/components/Transactions/TransactionItem.tsx
                    <span> {this.props.transaction.account} </span> 
                    <span> {this.props.transaction.category} </span> 
=======
                    <span> {this.props.transaction.account} </span>
                    <span> {this.props.transaction.category} </span>
>>>>>>> dev:src/components/Transactions/TransactionItem/TransactionItem.tsx
                    <span> {this.props.transaction.description} </span>
                </div>
                <span> -${this.props.transaction.amount} </span>
            </div>
        );
    }
}

export default TransactionItem;
