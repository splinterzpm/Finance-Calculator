import React, { Component } from 'react';

import Account from '../Account';

import './AddAccount.scss';

interface Props {
    handleCreateAccount: (account: Account) => void
};

interface State {
    id: number,
    name: string,
    balance: number,
};

class AddAccount extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: 3,
            name: '',
            balance: 0
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as React.ComponentState);
    }

    handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { id, name, balance } = this.state;
        if (name != '') {
            this.props.handleCreateAccount(new Account(id, name, balance));
            this.setState({ id: id + 1, name: '', balance: 0 });
        }
        else alert('Add the appropriate name of category');
    }

    render() {
        return (
            <div className="add-account">
                <form>
                    <div className="add-account__title">
                        <span> Add Account </span>
                    </div>

                    <label id="name" className="add-account__label">Account name</label>
                    <div className="add-account__input">
                        <input placeholder="Account Name" type="text"
                            className="add-account__input__name"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>

                    <label id="balance" className="add-account__label">Balance</label>
                    <div className="add-account__input">
                        <input type="number"
                            className="add-account__input__balance"
                            id="balance"
                            name="balance"
                            value={this.state.balance}
                            onChange={this.handleChange} />
                    </div>

                    <button className="waves-effect waves-light btn blue-grey darken-2"
                        onClick={this.handleSubmit}> Add </button>
                </form>
            </div>
        );
    }
}

export default AddAccount;