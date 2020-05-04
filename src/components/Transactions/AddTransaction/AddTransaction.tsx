import React, { Component } from 'react';
import Transaction from '../Transaction';
import Account from '../../Accounts components/Account';
import Category from '../../Categories/Category';

import "../../../../node_modules/materialize-css/sass/materialize.scss";
import 'materialize-css';
import './AddTransaction.scss';


interface Props {
    categories: Array<Category>,
    accountList: Array<Account>,
    handleCreateTransaction: (transaction: Transaction) => void
}

interface State {
    id: number;
    accountid: Account['id'];
    amount: number;
    categoryid: Category['id'];
    description: string;
    accountDropdownName: string;
    categoryDropdownName: string;
    date?: Date
}

class AddTransaction extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: 1,
            accountid: 0,
            amount: 0,
            categoryid: 0,
            description: '',
            accountDropdownName: 'Choose account',
            categoryDropdownName: 'Choose category'
            //date: {Date.now()}
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as React.ComponentState);
    }

    handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { id, amount, accountid, categoryid, description } = this.state;
        const { accountList, categories, handleCreateTransaction } = this.props;
        if (amount > 0) {
            handleCreateTransaction(new Transaction(
                id, accountList[accountid].name,
                amount,
                categories[categoryid].name,
                description
            ));
            accountList[accountid].balance = accountList[accountid].balance - amount;
            this.setState({
                id: id + 1,
                amount: 0,
                description: '',
                accountDropdownName: 'Choose account',
                categoryDropdownName: 'Choose category'
            });
        }
        else alert('Add the appropriate amount');
    }

    handleChangeDropdown = (id: Account['id']) => {
        const { accountList } = this.props;
        this.setState({ accountid: id, accountDropdownName: accountList[id].name });
    }

    handleDropdownCategory = (id: Category['id']) => {
        const { categories } = this.props;
        this.setState({ categoryid: id, categoryDropdownName: categories[id].name });
    }

    componentDidMount = () => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    }

    render() {
        return (
            <div className="add-transaction">
                <form>
                    <div className="add-transaction__title">
                        <span> Add transaction </span>
                    </div>

                    <div>
                        <div className="input-field col s4">
                            <a className="dropdown-trigger btn blue-grey darken-2"
                                href="#"
                                data-target="dropdown-account">
                                {this.state.accountDropdownName}
                            </a>

                            <ul id="dropdown-account" className="dropdown-content blue-grey darken-2">
                                {this.props.accountList.map((account) => (
                                    <li className="dropdown-accounts"
                                        key={`account_${account.id}`}
                                        onClick={() => this.handleChangeDropdown(account.id)}>

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
                        <label id="amount" className="add-transaction__label">Amount</label>
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
                                {this.state.categoryDropdownName}
                            </a>

                            <ul id="dropdown-category" className="dropdown-content blue-grey darken-2">
                                {this.props.categories.map((category) => (
                                    <li key={`category${category.id}`} onClick={() => this.handleDropdownCategory(category.id)}>
                                        <a href="#!">
                                            <div className="dropdown-content__item">
                                                {category.name}
                                            </div>
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <label id="description" className="add-transaction__label">Description</label>
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