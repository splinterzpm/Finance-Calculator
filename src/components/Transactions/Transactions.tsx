import React, { Component } from 'react';

import Transaction from './Transaction';
import TransactionItem from './TransactionItem';

import "../../../node_modules/materialize-css/sass/materialize.scss";
import '../../scss/Transaction.scss';

interface Props {
    transactionList: Array<Transaction>
}

interface State {}

class Transactions extends Component<Props, State> {

    render() {
        return (
                <ul className="TransactionList collection blue-grey darken-2">
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