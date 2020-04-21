import * as React from 'react';
import Account from './Account';

export interface  HomeProps {
}

export default function Home (props:  HomeProps) {
  return (
    <div> 
      <h1>
      Make Your Account Today
      </h1>
        <Account name="" surname="" accnumber={0} />
    </div>
  );
}
