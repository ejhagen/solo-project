import React, { Component } from 'react';


class AnswerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
  }

  onValueChange (event) {
    console.log('state updated')
    this.setState({
      selectedOption: event.target.value
    })
  }

  answerSubmit (event) {
    event.preventDefault();
    console.log('this.state.selectedOption', this.state.selectedOption)
    console.log('this.props.correctAnswer', this.props.correctAnswer)

    if (this.state.selectedOption === this.props.correctAnswer) {
      console.log('correct answer')
    }
    else {
      console.log('wrong!')
    }
  }

  render() {     
    const answers = [...this.props.answersArray];
    const newAnswers = answers.join('').split(',');
    const answerDisplay = [];    
    
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
      )
    }

    

    return (
      <div >
        <div id="questionBox">
        {this.props.currQuestion}
        </div>
           
        <form onSubmit={this.answerSubmit}>
        
          <div id="answerBox">            
            <ul>
              {answerDisplay}
            </ul>
          </div>

          <div id='buttonBox'>                  
            <span>
            <button className="button" type="submit">Submit Answer</button>
            <button className="button">Next</button>
            </span>              
          </div> 

        </form>
       
      </div>
    )
    }

}


export default AnswerBox;