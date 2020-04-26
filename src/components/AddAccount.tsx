import React, { Component } from 'react';
import Account from '../Account';
import '../scss/Account.scss';

interface Props {
    handleCreateAccount: (account: Account) => void
}

interface State {
    id: number,
    name: string,
    balance: number,
}

class AddAccount extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            balance: 0
        };

        this.handleChange = this.handleChange.bind(this);
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
                        <span> Добавление счета </span>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                        <input placeholder="Account Name" type="text" className="validate"  name="name" value={this.state.name} 
                            onChange={this.handleChange} />
                        </div>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Balance" type="number" className="validate" name="balance" value={this.state.balance} 
                                onChange={this.handleChange}/>
                        </div>
                        <button className="waves-effect waves-light btn cyan lighten-1 AccBtn"  
                        onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddAccount;