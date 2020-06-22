import React from 'react';
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

class TopLine extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(0 * Math.PI / 180);
    ctx.fillRect(0, 0, 200, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={20} />
    )
  }
}

class MiddleLine extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(90 * Math.PI / 180);
    ctx.fillRect(0, -20, 200, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={20} height={200} />
    )
  }
}

class BottomLine extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(0 * Math.PI / 180);
    ctx.fillRect(0, 0, 100, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={100} height={20} />
    )
  }
}

class Rope extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(90 * Math.PI / 180);
    ctx.fillRect(0, -156, 30, 12);
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={30} />
    )
  }
}

class Head extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(150, 25, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={50} />
    )
  }
}

class Body extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(90 * Math.PI / 180);
    ctx.fillRect(0, -20, 30, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={20} height={35} />
    )
  }
}

class LeftArm extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(300 * Math.PI / 180);
    ctx.fillRect(31, 110, 30, 15);
  }
  render() {
    return (
      <canvas ref="canvas" width={140} height={35} />
    )
  }
}

class RightArm extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(55 * Math.PI / 180);
    ctx.fillRect(10, -10, 30, 15);
  }
  render() {
    return (
      <canvas ref="canvas" width={50} height={35} />
    )
  }
}

class LeftLeg extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(120 * Math.PI / 180);
    ctx.fillRect(-70, -130, 50, 10);
  }
  render() {
    return (
      <canvas ref="canvas" width={150} height={70} />
    )
  }
}

class RightLeg extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(60 * Math.PI / 180);
    ctx.fillRect(5, -10, 50, 10);
  }
  render() {
    return (
      <canvas ref="canvas" width={50} height={70} />
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Num />
            <TopLine />
          <div>
              <MiddleLine />

            <div class="hangmanPart">
              <div><Rope /></div>
              <div><Head /></div>
              <div >
                <div class="hangmanPart"><LeftArm /></div>
                <div class="hangmanPart"><Body /></div>
                <div class="hangmanPart"><RightArm /></div>
              </div>
              <div>
                <div class="hangmanPart"><LeftLeg /></div>
                <div class="hangmanPart"><RightLeg /></div>
              </div>
            </div>

          </div>
            <BottomLine />
        </header>
      </div>
    );
  }
}

export default App;
