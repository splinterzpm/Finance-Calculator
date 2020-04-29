import React, { Component } from 'react';
import Transaction from "./Transaction";

import "../../../node_modules/materialize-css/sass/materialize.scss";
import '../../scss/Transaction.scss';

interface Props {
    transaction: Transaction
}

class TransactionItem extends Component<Props, any>{

    render() {
        return (
            <div className="collection-item blue-grey darken-2 TransactionItem">
                <span> {this.props.transaction.account} </span> 
                <span> {this.props.transaction.category} </span> 
                <span> {this.props.transaction.description} </span>
            </div>
        );
    }
}

export default TransactionItem;
