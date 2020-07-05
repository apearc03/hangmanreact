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
      this.props.letter
    )
  }
}

class WordLetter extends React.Component {

  render() {
    return (
      <div className="wordL">
        <div className="slot">{this.props.renderLetter ? this.props.letter : null}</div>
        <Line angle="0" x="0" y="0" width="70" height="5" canvasWidth="70" canvasHeight="10"></Line>
      </div>
    )
  }
}

class HangManPart extends React.Component {
  render() {
    return (
      this.props.showPart ? this.props.part : null
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxParts = 10;
    this.partIncrementer = 0
    this.shouldShowParts = [];
    this.word = this.pickWord(); //assign to random word, preferably all caps.
    this.shouldRenderWordLetters = [];
    this.gameOver = false;

    this.lettersToPick = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  }

  pickWord() {
    return "ALPHABET";
  }

  //Need to disable letters
  makeGuess(letterChosen, letterIndex) {
    if(letterChosen === null || this.gameOver){
      return;
    }
    
    this.lettersToPick[letterIndex] = null; 
    let incorrectGuess = true;
    let hasWon = true;

    this.word.split('').forEach(
      (letter, index) => {
        if(letterChosen === letter){
          this.shouldRenderWordLetters[index] = true;
          incorrectGuess = false;
        }
        if(this.shouldRenderWordLetters[index] !== true){
          hasWon = false;
        }
      }
    )

    if(incorrectGuess){
      this.shouldShowParts[this.partIncrementer] = true;
      this.partIncrementer++;
    }
    
    this.forceUpdate();

    if (this.partIncrementer >= this.maxParts) {
      this.gameOver = true;
    }

    if(hasWon){
      console.log("Won");
    }

  }

  render() {
    return (
      <div id="app">
        <div id="word">
          {this.word.split('').map((wordLetter, index) => {
            return <WordLetter letter={wordLetter} renderLetter={this.shouldRenderWordLetters[index]} />
          })
          }
        </div>
        <div id="letters">
          {this.lettersToPick.map((letterToPick, index) => {
            return <div className="displayLetter" onClick={() => this.makeGuess(letterToPick, index)}><Letter letter={this.lettersToPick[index]} /></div>
          })}
        </div>
        <div id="hangman">
          <div id="part2"><HangManPart showPart={this.shouldShowParts[2]} part={<Line angle="0" x="0" y="0" width="200" height="20" canvasWidth="200" canvasHeight="20" />} /></div>
          <div>
            <HangManPart showPart={this.shouldShowParts[1]} part={<Line angle="90" x="0" y="-20" width="200" height="20" canvasWidth="20" canvasHeight="200" />} />
            <div className="hangmanPart">
              <div id="part3"><HangManPart showPart={this.shouldShowParts[3]} part={<Line angle="90" x="0" y="-156" width="30" height="12" canvasWidth="200" canvasHeight="30" />} /></div>
              <div id="part4"><HangManPart showPart={this.shouldShowParts[4]} part={<Circle x="150" y="25" radius="22" startAngle="0" canvasWidth="200" canvasHeight="50" />} /></div>
              <div >
                <div id="part5" className="hangmanPart"><HangManPart showPart={this.shouldShowParts[5]} part={<Line angle="300" x="31" y="110" width="30" height="15" canvasWidth="140" canvasHeight="35" />} /></div>
                <div id="part6" className="hangmanPart"><HangManPart showPart={this.shouldShowParts[6]} part={<Line angle="90" x="0" y="-20" width="30" height="20" canvasWidth="20" canvasHeight="35" />} /></div>
                <div id="part7" className="hangmanPart"><HangManPart showPart={this.shouldShowParts[7]} part={<Line angle="55" x="10" y="-10" width="30" height="15" canvasWidth="50" canvasHeight="35" />} /></div>
              </div>
              <div>
                <div id="part8" className="hangmanPart"><HangManPart showPart={this.shouldShowParts[8]} part={<Line angle="120" x="-70" y="-130" width="50" height="10" canvasWidth="150" canvasHeight="70" />} /></div>
                <div id="part9" className="hangmanPart"><HangManPart showPart={this.shouldShowParts[9]} part={<Line angle="60" x="5" y="-10" width="50" height="10" canvasWidth="50" canvasHeight="70" />} /></div>
              </div>
            </div>

          </div>
          <HangManPart showPart={this.shouldShowParts[0]} part={<Line angle="0" x="0" y="0" width="100" height="20" canvasWidth="100" canvasHeight="20" />} />
        </div>
      </div>
    );
  }
}

export default App;