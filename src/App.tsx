import React from 'react';
import './App.scss';
import { Hello } from './Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello compiler="TypeScript" framework="React" />,
      </div>
    );
  }
}

export default App;
