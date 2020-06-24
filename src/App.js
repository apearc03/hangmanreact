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

class Line extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.rotate(this.props.angle * Math.PI / 180);
    ctx.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
  }
  render() {
    return (
      <canvas ref="canvas" width={this.props.canvasWidth} height={this.props.canvasHeight} />
    )
  }
}

class Circle extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.props.x, this.props.y, this.props.radius, this.props.startAngle, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  render() {
    return (
      <canvas ref="canvas" width={this.props.canvasWidth} height={this.props.canvasHeight} />
    )
  }
}

class Letter extends React.Component {
  render() {
    return (
      <div class="displayLetter">{this.props.letter}</div>
    )
  }
}


class GuessLetter extends React.Component {
  render() {
    return (
      <div class="guessLetter">
        <div>{this.props.letter}</div>
        <Line angle="0" x="0" y="0" width="70" height="5" canvasWidth="70" canvasHeight="10"></Line>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.word = "alphabet"; //assign to random word
  }

  render() {

    const guessLetters = [];
    const lettersToPick = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const letterInstances = [];

    for (let value of lettersToPick) {
      letterInstances.push(<Letter letter={value} />);
    }

    for(let value of this.word){
      guessLetters.push(<GuessLetter letter={value}/>);
    }

    return (
      <div>
        <div className="hangman">
          <header className="App-header">
          </header>
          <Num />
          <Line angle="0" x="0" y="0" width="200" height="20" canvasWidth="200" canvasHeight="20" />
          <div>
            <Line angle="90" x="0" y="-20" width="200" height="20" canvasWidth="20" canvasHeight="200" />

            <div class="hangmanPart">
              <div><Line angle="90" x="0" y="-156" width="30" height="12" canvasWidth="200" canvasHeight="30" /></div>
              <div><Circle x="150" y="25" radius="22" startAngle="0" canvasWidth="200" canvasHeight="50" /></div>
              <div >
                <div class="hangmanPart"><Line angle="300" x="31" y="110" width="30" height="15" canvasWidth="140" canvasHeight="35" /></div>
                <div class="hangmanPart"><Line angle="90" x="0" y="-20" width="30" height="20" canvasWidth="20" canvasHeight="35" /></div>
                <div class="hangmanPart"><Line angle="55" x="10" y="-10" width="30" height="15" canvasWidth="50" canvasHeight="35" /></div>
              </div>
              <div>
                <div class="hangmanPart"><Line angle="120" x="-70" y="-130" width="50" height="10" canvasWidth="150" canvasHeight="70" /></div>
                <div class="hangmanPart"><Line angle="60" x="5" y="-10" width="50" height="10" canvasWidth="50" canvasHeight="70" /></div>
              </div>
            </div>

          </div>
          <Line angle="0" x="0" y="0" width="100" height="20" canvasWidth="100" canvasHeight="20" />
        </div>
        <div id="guesses">
          {guessLetters}
        </div>
        <div>
          {letterInstances}
        </div>
      </div>
    );
  }
}

export default App;
