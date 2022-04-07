import React, { Component } from 'react';
import Answer from './Answer';

class AnswerBox extends Component {
    constructor(props) {
        super(props);   
    }

    render() {
        console.log('--> render in answer box fired')
        // const possibleAnswers = []
        // for (let i = 0; i < this.state.answerArray.length; i += 1) {
        //     possibleAnswers.push(
        //         <Answer className='answer' answer={this.state.answer[i]} key={this.state.answerArray[i]}>
        //             <input type='radio' value={this.state.answerArray[i]} />
        //             {this.state.answerArray[i]} 
        //         </Answer>
        //     )
        // }

        return (
            <div id="answerBox">
               <Answer />
                {/* {possibleAnswers} */}
                {/* <Answer text={this.props.answerArray[0]}/> */}
            </div>

        )
    }

}


export default AnswerBox;