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
    ctx.fillRect(100, - 100, 80, 20);
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
    const ctx = this.refs.myCanvas.getContext('2d');
    const x1 = 150;
    const y1 = 100;
    const r = 200;
    const theta = 0.1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + r * Math.cos(theta), y1 + r * Math.sin(theta));
    ctx.stroke();
  }
  render() {
    return (
      <canvas ref="myCanvas" width={400} height={400} />
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
