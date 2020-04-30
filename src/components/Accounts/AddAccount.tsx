import React, { Component } from 'react';

import Account from '../../Account';

import 'materialize-css';
import '../../scss/Account.scss';

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
        this.setState({ [e.target.name]: e.target.value }  as React.ComponentState);
    }

    handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {id, name, balance} = this.state;
        this.props.handleCreateAccount(new Account(id, name, balance));
        this.setState({id: id+1, name:'', balance: 0});
    }

    render() {
        return (
            <div className="AddAccount">
                <form>
                    <div className="SpanAddAccount">
                        <span> Add Account </span>
                    </div>

                    <div>
                        <div className="input-field col s4">
                        <input placeholder="Account Name" type="text" 
                            className="validate AccountInput"  
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange} />
                        </div>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Balance" type="number" 
                                className="validate AccountInput" 
                                name="balance" 
                                value={this.state.balance}
                                onChange={this.handleChange}/>
                        </div>

                        <button className="waves-effect waves-light btn blue-grey darken-2"  
                            onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddAccount;