import React from 'react';
import logo from './logo.svg';
import './App.css';

class Num extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
      <button 
        onClick={() => this.setState({value: this.state.value + 1})}
      >
        increment
      </button>
      <p>
        {this.state.value}
      </p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <Num></Num>
        </header>
      </div>
    );
  }
}

export default App;
