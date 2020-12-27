import React, { Component } from 'react';

import Transaction from '../Transaction';
import TransactionItem from '../TransactionItem/TransactionItem';

import "../../../../node_modules/materialize-css/sass/materialize.scss";
import './Transactions.scss';

interface Props {
    transactionList: Array<Transaction>
};

interface State { };

class Transactions extends Component<Props, State> {

    render() {
        return (
            <ul className="collection blue-grey darken-2 transaction-list">
                <li>
                    {
                        this.props.transactionList.map((transaction) => (
                            <TransactionItem key={`transaction_${transaction.id}`} transaction={transaction} />
                        ))
                    }
                </li>
            </ul>
        );
    }
}

export default Transactions;