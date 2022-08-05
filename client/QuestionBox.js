import React, { Component } from "react";

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      submitted: false,
      isCorrect: false,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
  }

  onValueChange(event) {
    console.log("state updated");

    this.setState({
      selectedOption: event.target.value,
    });
  }

  answerSubmit(event) {
    event.preventDefault();
    if (this.state.selectedOption === "") {
      console.log("selection is empty");
    } else {
      if (this.state.selectedOption === this.props.correctAnswer) {
        // console.log('correct answer')
        //update state here to hide answers and show addInfo
        this.setState({ submitted: true, isCorrect: true });
      } else {
        // console.log('wrong!')
        this.setState({ submitted: true });
      }
    }
  }

  render() {
    const answers = [this.props.answersArray];
    const newAnswers = answers.join("").split(",");
    const answerDisplay = [];
    const submitted = this.state.submitted;
    const addInfo = this.props.addInfo;
    const feedback =
      (this.state.isCorrect ? `That is correct!` : `That is incorrect.`) +
      `The correct answer is ${this.props.correctAnswer}.`;

    for (let i = 0; i < newAnswers.length; i += 1) {
      answerDisplay.push(
        <li>
          <input
            type="radio"
            id={newAnswers[i]}
            key={newAnswers[i]}
            value={newAnswers[i]}
            checked={this.state.selectedOption === newAnswers[i]}
            onChange={this.onValueChange}
          />
          <label htmlFor={newAnswers[i]}>{newAnswers[i]}</label>
        </li>
      );
    }

    return (
      <div>
        <div className="image">
          <img src={this.props.imgSource} />
        </div>

        <div id="questionBox">{this.props.currQuestion}</div>

        <form onSubmit={this.answerSubmit}>
          <div id="answerBox">
            <ul>
              {submitted ? feedback : ""}
              {this.state.submitted ? addInfo : answerDisplay}
            </ul>
          </div>

          <div id="buttonBox">
            <span>
              <button className="button" type="submit">
                Submit Answer
              </button>
              <button
                onClick={this.props.nextSubmit(this.props.questionNumber)}
                className="button"
                type="next"
              >
                Next
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionBox;
