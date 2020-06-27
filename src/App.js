import React from 'react';
import './App.css';

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
      <div className="displayLetter">{this.props.letter}</div>
    )
  }

  letterGuessed() {

  }
}


class WordLetter extends React.Component {
  constructor(props) {
    super(props);
    this.shouldShowLetter = false;
  }

  render() {
    return (
      <div className="wordL">
        <div className="slot">{this.shouldShowLetter ? this.props.letter : null}</div>
        <Line angle="0" x="0" y="0" width="70" height="5" canvasWidth="70" canvasHeight="10"></Line>
      </div>
    )
  }

  showLetter() {
    this.shouldShowLetter = true;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.word = this.pickWord(); //assign to random word, preferably all caps.
    this.state ={
      partIncrementer : 0,
    };
    this.partStates = [];
    this.wordLetters = [];
    this.lettersToPick = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.letterInstances = [];
    this.hangManParts = [];

    for (var i = 0; i < this.lettersToPick.length; i++ ){
      this.letterInstances.push(<Letter key = {i} letter={this.lettersToPick[i]} />);
    }

    for (var j = 0; j < this.word.length; j++) {
      this.wordLetters.push(<WordLetter key={j} letter={this.word.charAt(j)} />);
    }

    this.hangManParts.push(<Line angle="0" x="0" y="0" width="100" height="20" canvasWidth="100" canvasHeight="20" />);
    this.hangManParts.push(<Line angle="90" x="0" y="-20" width="200" height="20" canvasWidth="20" canvasHeight="200" />);
    this.hangManParts.push(<Line angle="0" x="0" y="0" width="200" height="20" canvasWidth="200" canvasHeight="20" />);
    this.hangManParts.push(<Line angle="90" x="0" y="-156" width="30" height="12" canvasWidth="200" canvasHeight="30" />);
    this.hangManParts.push(<Circle x="150" y="25" radius="22" startAngle="0" canvasWidth="200" canvasHeight="50" />);
    this.hangManParts.push(<Line angle="300" x="31" y="110" width="30" height="15" canvasWidth="140" canvasHeight="35" />);
    this.hangManParts.push(<Line angle="90" x="0" y="-20" width="30" height="20" canvasWidth="20" canvasHeight="35" />);
    this.hangManParts.push(<Line angle="55" x="10" y="-10" width="30" height="15" canvasWidth="50" canvasHeight="35" />);
    this.hangManParts.push(<Line angle="120" x="-70" y="-130" width="50" height="10" canvasWidth="150" canvasHeight="70" />);
    this.hangManParts.push(<Line angle="60" x="5" y="-10" width="50" height="10" canvasWidth="50" canvasHeight="70" />);
  }

  pickWord() {
    return "alphabet";
  }

  showHangManPart(){
    this.partStates[this.state.partIncrementer] = this.hangManParts[this.state.partIncrementer];
    this.setState({partIncrementer: this.state.partIncrementer + 1})
  }

  render() {
    return (
      <div id="app">
        <div id="word">
          {this.wordLetters}
        </div>
        <div id="letters">
          {this.letterInstances}
        </div>
        <div id="hangman">
          <div id = "part3">{this.partStates[2]}</div>
          <div>
            {this.partStates[1]}
            <div className="hangmanPart">
              <div id = "part4">{this.partStates[3]}</div>
              <div id = "part5">{this.partStates[4]}</div>
              <div >
                <div id = "part6" className="hangmanPart">{this.partStates[5]}</div>
                <div id = "part7" className="hangmanPart">{this.partStates[6]}</div>
                <div id = "part8" className="hangmanPart">{this.partStates[7]}</div>
              </div>
              <div>
                <div id = "part9" className="hangmanPart">{this.partStates[8]}</div>
                <div id = "part10" className="hangmanPart">{this.partStates[9]}</div>
              </div>
            </div>

          </div>
          <div id = "part2">{this.partStates[0]}</div>
        </div>
        <button onClick={() => this.showHangManPart()}>
          onclick
        </button>
      </div>
    );
  }
}

export default App;