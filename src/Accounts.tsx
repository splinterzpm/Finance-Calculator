import React, { Component } from 'react';
import Account from './Account';

interface Props {

}

interface State {
    accList: {
        accId: number,
        accName: string,
        balance: number,
        isAdded: boolean
    }[]
}

class Accounts extends Component <Props, State> {
    constructor(props: Props) {
        super(props); 
        this.state = { 
            accList: [
                {
                    accId: 1,
                    accName: 'Account 1',
                    balance: 11,
                    isAdded: true,
                },
                {
                    accId: 2,
                    accName: 'Account 2',
                    balance: 12,
                    isAdded: true
                }
            ]
        }
    }

    handleClickAdd = (accName: string, balance: number) => {
        const newAccList = this.state.accList;
        newAccList.push( {accId: newAccList.length+1, accName: accName, balance: balance, isAdded: true} );
        this.setState({ accList: newAccList });
    }

    render() {
        return (
            <div className="AccMain">
                {this.state.accList.map((acc) => (
                <Account key={acc.accId} handleClickAdd={this.handleClickAdd} isAdded={acc.isAdded} />
                ))}
                <a href="/Account" className="waves-effect waves-light btn cyan lighten-1 AccBtn"> Add Account </a>
            </div>
        );
    }
}

export default Accounts;