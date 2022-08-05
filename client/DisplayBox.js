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
      questionNumber: 0,
    };
    this.nextQuestion.bind(this);
  }

  nextQuestion = (number) => {
    this.setState({ questionNumber: number + 1 });
    console.log(this.state);
  };

  // Fetch call to db for fishdata
  componentDidMount() {
    // console.log('--> component did mount fired')
    fetch("/fishdata")
      .then((response) => response.json())
      // .then(fishdata => console.log('answerArray,', fishdata.answerarray))
      .then((fishdata) =>
        this.setState({
          imgsrc: fishdata[this.state.questionNumber].imgsrc,
          question: fishdata[this.state.questionNumber].question,
          answerArray: fishdata[this.state.questionNumber].answerarray,
          correctAnswer: fishdata[this.state.questionNumber].correctanswer,
          addInfo: fishdata[this.state.questionNumber].addinfo,
        })
      )
      .catch((err) =>
        console.log("EH error in component did mount fetch request")
      );
  }

  render() {
    return (
      <div id="displayBox">
        <QuestionBox
          imgSource={this.state.imgsrc}
          currQuestion={this.state.question}
          answersArray={this.state.answerArray}
          correctAnswer={this.state.correctAnswer}
          addInfo={this.state.addInfo}
          questionNumber={this.state.questionNumber}
          nextSubmit={() => this.nextQuestion}
        />
      </div>
    );
  }
}

export default DisplayBox;
