import React, { Component } from "react";
import DisplayBox from "./DisplayBox";
import InputBox from "./InputBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionArray: [],
      questionNumber: 0,
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    console.log("handle next clicked in App component");
  }

  componentDidMount() {
    // console.log('--> component did mount fired')
    fetch("/fishdata")
      .then((response) => response.json())
      // .then(fishdata => console.log('answerArray,', fishdata.answerarray))
      .then((fishdata) => this.setState(this.state.questionArray))
      .catch((err) =>
        console.log("EH error in component did mount fetch request")
      );
  }

  render() {
    return (
      <div id="container">
        <h1> --- FLY-DENTIFIER --- </h1>
        <h4> A fly fisher's online companion </h4>
        <div>
          <DisplayBox
            // imgsrc={this.state.imgsrc}
            // question={this.state.question}
            // answerArray={this.state.answerArray}
            // correctAnswer={this.state.answerArray}
            // addInfo={this.state.addInfo}
            // handleNext={this.handleNext}
            currQuestion={this.state.questionArray[this.state.questionNumber]}
          />
        </div>
        <div>{/* <InputBox /> */}</div>
      </div>
    );
  }
}

export default App;

// nextQuestion = () => {
//   this.setState({
//     imgsrc: this.state.questionArray[this.state.questionNumber].imgsrc,
//     question: this.state.questionArray[this.state.questionNumber].question,
//     answerArray:
//       this.state.questionArray[this.state.questionNumber].answerarray,
//     correctAnswer:
//       this.state.questionArray[this.state.questionNumber].correctanswer,
//     addInfo: this.state.questionArray[this.state.questionNumber].addinfo,
//   });

//   console.log(this.state.questionArray);
// };

// const handleSubmit = () => {
//   console.log("submit button pressed");
//   //if radio isn't toggled do nothing
//   //check answer
// };

// const handleNext = () => {
//   console.log("next button pressed");
// };
//randomizes the order of the array to be passed into fetch request
// const databaseArray = [1, 2, 3, 4, 5, 6];
// const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// ReactDOM.render(<App />, document.getElementById('app'));
