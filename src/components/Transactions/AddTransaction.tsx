import React, { Component } from 'react';
import Transaction from './Transaction';
import Account from '../../Account';

import '../../scss/Transaction.scss';

interface Props {
    categories: Array<string>,
    accountList: Array<Account>,
    handleCreateTransaction: (transaction: Transaction) => void
}

interface State {
    id: number;
    account: Account['name'];
    accountid: Account['id'];
    amount: number;
    category: string;
    description: string;
    date?: Date
}

class AddTransaction extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: 0,
            account: '',
            accountid: 0,
            amount: 0,
            category: '',
            description: '',
            //date: {Date.now()}
        };
    }
    
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value }  as React.ComponentState);
    }

    handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {id, account, amount, accountid, category, description} = this.state;
        this.props.handleCreateTransaction(new Transaction(id, account, amount, category, description));
        this.props.accountList[accountid].balance = this.props.accountList[accountid].balance - amount;
        this.setState({id: id+1, amount: 0, category: '', description: ''});
    }

    handleChangeDropdown = (account: Account['name'], id: Account['id']) => {
        this.setState({ account: account, accountid: id });
    }

    componentDidMount = () => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }

    render() {
        return (
            <div className="AddTransaction">
                <form>
                    <div className="SpanAddTransaction">
                        <span> Add transaction </span>
                    </div>
                    
                    <div>
                        <div className="input-field col s4">
                            <a className="dropdown-trigger btn blue-grey darken-2" href="#" data-target="dropdown1"> Choose account</a>
                            <ul id="dropdown1" className='dropdown-content blue-grey darken-2'>
                                { this.props.accountList.map((account)=> (
                                    <li key={`account_${account.id}`} onClick={() => this.handleChangeDropdown(account.name, account.id)}>
                                        <a href="#!">
                                            {account.name}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="input-field col s4">
                        <input placeholder="Amount" type="number" className="validate"  name="amount" value={this.state.amount} 
                            onChange={this.handleChange} />
                        </div>
                    </div>

                    <div>
                        <div className="input-field col s4">
                        <input placeholder="Category" type="text" className="validate"  name="category" value={this.state.category} 
                            onChange={this.handleChange} />
                        </div>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Description" type="text" className="validate" name="description" value={this.state.description} 
                                onChange={this.handleChange} /> 
                        </div>
                        <button className="waves-effect waves-light btn blue-grey darken-2 TransactionBtn"  
                        onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTransaction;