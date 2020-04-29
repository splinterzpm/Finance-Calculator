import React, { Component } from 'react';
import Transaction from './Transaction';
import Account from '../../Account';

import '../../scss/Transaction.scss';

interface Props {
    accountList: Array<Account>,
    handleCreateTransaction: (transaction: Transaction) => void
}

interface State {
    id: number;
    account: Account['name'];
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
        const {id, account, category, description} = this.state;
        this.props.handleCreateTransaction(new Transaction(id, account, category, description));
        this.setState({id: id+1, category: '', description: ''});
    }

    handleChangeDropdown = (account: Account['name']) => {
        this.setState({ account: account });
    }

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
        });
    }

    render() {
        console.log(this.state.account);
        return (
            <div className="AddTransaction">
                <form>
                    <div className="SpanAddAccount">
                        <span> Добавление транзакции </span>
                    </div>
                    
                    <div>
                        <div className="input-field col s4">
                            <a className="dropdown-trigger btn blue-grey darken-2" href="#" data-target="dropdown1"> Choose account</a>
                            <ul id="dropdown1" className='dropdown-content'>
                                { this.props.accountList.map((account)=> (
                                    <li key={`account_${account.id}`} onClick={() => this.handleChangeDropdown(account.name)}>
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
                        <input placeholder="Category" type="text" className="validate"  name="category" value={this.state.category} 
                            onChange={this.handleChange} />
                        </div>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Description" type="text" className="validate" name="description" value={this.state.description} 
                                onChange={this.handleChange}/>
                        </div>
                        <button className="waves-effect waves-light btn blue-grey darken-2 AccBtn"  
                        onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTransaction;