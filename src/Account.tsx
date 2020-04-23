import * as React from 'react';
import './Account.scss';

interface Props {
  isAdded: boolean,
  handleClickAdd: (accName: string, balance: number) => void
}

export interface State {
  accId: number,
  accName: string,
  balance: number,
}

export default class Account extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props); 
    this.state = { accId: 0,  accName: '1', balance: 0 }
  }

  handleChange = (e: any) => {
    this.setState({ accName: e.target.value });
  }

  handleChange2 = (e: any) => {
    this.setState({ balance: e.target.value });
  }

  render () {
    
    let acc = null;
    if(!this.props.isAdded) {
      acc = (
        <div className="row">
          <form>
            <div className="row">
              <span> Добавление счета </span>
            </div>

            <div className="row">
              <div className="input-field col s4">
                <input placeholder="Account Name" type="text" className="validate"  value={this.state.accName} 
                  onChange={this.handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s4">
                <input placeholder="Balance" type="text" className="validate" value={this.state.balance} 
                  onChange={this.handleChange2}/>
              </div>
              <button className="waves-effect waves-light btn cyan lighten-1 AccBtn"  
              onClick={() => this.props.handleClickAdd(this.state.accName, this.state.balance)} > Add </button>
            </div>
          </form>
        </div>
      )
    } else {
      acc = (
        <div className="AccMain">
          <span> {this.state.accName} </span> 
          <span> {this.state.balance} </span> 
        </div>
      )
    }
    return (
      <div>
        {acc}
      </div>
        
    )
  }
}