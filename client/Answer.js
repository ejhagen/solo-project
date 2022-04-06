import React, { Component } from 'react';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const possibleAnswers = []
        for (let i = 0; i < this.state.answerArray.length; i += 1) {
            possibleAnswers.push(
                <Answer className='answer' >
                    <input type='radio' value={this.state.answerArray[i]} />
                    {this.state.answerArray[i]} 
                </Answer>
            )
        }

      return (
        <div className='answers'>
            {possibleAnswers}     
        </div>
      )
    }
}

export default Answer;