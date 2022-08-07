import React, { Component } from "react";
import QuestionBox from "./QuestionBox";

class DisplayBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: "",
      question: "",
      answerArray: "",
      correctAnswer: "",
      addInfo: "",
      // questionNumber: 0,
    };
  }

  // {
  //   questionArray: fishdata,
  //   imgsrc: fishdata[0].imgsrc,
  //   question: fishdata[0].question,
  //   answerArray: fishdata[0].answerarray,
  //   correctAnswer: fishdata[0].correctanswer,
  //   addInfo: fishdata[0].addinfo,
  // }

  // Fetch call to db for fishdata

  render() {
    return (
      <div id="displayBox">
        <QuestionBox
          imgSource={this.props.imgsrc}
          currQuestion={this.state.question}
          answersArray={this.state.answerArray}
          correctAnswer={this.state.correctAnswer}
          addInfo={this.state.addInfo}
          questionNumber={this.state.questionNumber}
          // nextSubmit={() => this.nextQuestion}
          handleNext={this.props.handleNext}
        />
      </div>
    );
  }
}

export default DisplayBox;
