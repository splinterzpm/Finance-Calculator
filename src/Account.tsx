import * as React from 'react';
import './Account.scss';

export interface AccountProps {
    name: string
    surname: string
    accnumber: number;
    
  }

export default function Account({
    name = '',
    surname = '',
    accnumber,
  }: AccountProps) {
    return (
    <div className="row">
        <form className="AccMain">
          <div className="row">
            <div className="input-field col s4">
              <input placeholder="First Name" type="text" className="validate" /* value={name} 
               onChange={handleChange()} */ />
            </div>
            <div className="input-field col s4">
              <input placeholder="Last Name" type="text" className="validate" /* value={surname} 
               onChange={handleChange2()} */ />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input placeholder="Account Number" type="text" className="validate" value={accnumber} />
            </div>
            <a className="waves-effect waves-light btn cyan lighten-1 AccBtn" /* onClick={handleClick()} */ > Add </a>
          </div>
        </form>
    </div>
    )
  }