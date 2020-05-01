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
            id: 1,
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
        if (amount > 0) {
            this.props.handleCreateTransaction(new Transaction(id, account, amount, category, description));
            this.props.accountList[accountid].balance = this.props.accountList[accountid].balance - amount;
            this.setState({id: id+1, amount: 0, category: '', description: ''});
        }
        else alert ('Add the appropriate amount');
    }

    handleChangeDropdown = (account: Account['name'], id: Account['id']) => {
        this.setState({ account: account, accountid: id });
    }

    handleDropdownCategory = (category: string) => {
        this.setState({category: category});
    }

    componentDidMount = () => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }

    render() {
        return (
            <div className="add-transaction">
                <form>
                    <div className="add-transaction__span">
                        <span> Add transaction </span>
                    </div>
                    
                    <div>
                        <div className="input-field col s4">
                            <a className="dropdown-trigger btn blue-grey darken-2" 
                                href="#" 
                                data-target="dropdown-account"> 
                                Choose account
                            </a>

                            <ul id="dropdown-account" className="dropdown-content blue-grey darken-2">
                                { this.props.accountList.map((account)=> (
                                    <li className="dropdown-accounts" 
                                        key={`account_${account.id}`} 
                                        onClick={() => this.handleChangeDropdown(account.name, account.id)}>

                                        <a href="#!">
                                            <div className="dropdown-content__item">
                                                {account.name}
                                            </div>
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="input-field col s4">
                        <input placeholder="Amount" 
                            type="number" 
                            className="validate add-transaction__input"  
                            name="amount" 
                            value={this.state.amount} 
                            onChange={this.handleChange} />
                        </div>
                    </div>

                    <div>
                        <div className="input-field col s4">
                            <a className="dropdown-trigger btn blue-grey darken-2" 
                                href="#" 
                                data-target="dropdown-category"> 
                                Choose category
                            </a>

                            <ul id="dropdown-category" className="dropdown-content blue-grey darken-2">
                                { this.props.categories.map((category, i)=> (
                                    <li key={i} onClick={() => this.handleDropdownCategory(category)}>
                                        <a href="#!">
                                            <div className="dropdown-content__item">
                                                {category}
                                            </div>
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Description" 
                                type="text" className="validate add-transaction__input" 
                                name="description" 
                                value={this.state.description} 
                                onChange={this.handleChange} 
                            /> 
                        </div>
                        <button className="waves-effect waves-light btn blue-grey darken-2 add-transaction__button"  
                        onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTransaction;