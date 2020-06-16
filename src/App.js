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
        <button className="numButton"
          onClick={() => this.setState({ value: this.state.value + 1 })}
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

class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(90 * Math.PI / 180);
    ctx.fillRect(0, - 100, 200, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={200} />
    )
  }
}

class CanvasLine extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(0 * Math.PI / 180);
    ctx.fillRect(50, 0, 80, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={20} />
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
          <Num />
          <CanvasComponent />

          <CanvasLine/>
        </header>
      </div>
    );
  }
}

export default App;
