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
    ctx.fillRect(140, 0, 160, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={300} height={20} />
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
    ctx.fillRect(0, - 60, 200, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={200} height={200} />
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
    ctx.fillRect(0, -150, 30, 20);
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
    ctx.arc(140, 25, 25, 0, 2 * Math.PI);
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
    ctx.fillRect(0, -50, 30, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={60} height={70} />
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
    ctx.fillRect(- 5, 40, 30, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={70} height={70} />
    )
  }
}

class RightArm extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(50 * Math.PI / 180);
    ctx.fillRect(20, - 20, 30, 20);
  }
  render() {
    return (
      <canvas ref="canvas" width={70} height={70} />
    )
  }
}

class LeftLeg extends React.Component {
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
      <canvas ref="canvas" width={50} height={30} />
    )
  }
}

class RightLeg extends React.Component {
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
      <canvas ref="canvas" width={50} height={30} />
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
            <div class="fLeft">
              <MiddleLine />
            </div>

            <div class="fLeft">
              <div><Rope /></div>
              <div><Head /></div>
              <div>
                <div class="fLeft"><LeftArm /></div>
                <div class="fLeft"><Body /></div>
                <div class="fLeft"><RightArm /></div>
              </div>
              <div>
                <div class="fLeft"><LeftLeg /></div>
                <div class="fLeft"><RightLeg /></div>
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
