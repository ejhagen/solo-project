import React, { Component } from 'react';
import Answer from './Answer';

class AnswerBox extends Component {
    constructor(props) {
        super(props);   
    }

    render() {
        console.log('--> render in answer box fired')
        console.log(this.props.answerArray)
        const possibleAnswers = []
        // for (let i = 0; i < this.props.answerArray.length; i += 1) {
            
        //     // possibleAnswers.push(
        //     //     <Answer className='answer' key={this.props.answerArray[i]}>

        //     //         <input type='radio' value={this.props.answerArray[i]} />
        //     //         {this.props.answerArray[i]} 
        //     //     </Answer>
        //     // )
        // }

        return (
            <div id="answerBox">
               {/* <Answer /> */}
                {possibleAnswers}
                <ul>
            <li>
                <input type='radio'></input> 
                Barr's Emerger 
            </li>
            <li>
                <input type='radio'></input> 
                Zebra Midge
            </li>
            <li>
                <input type='radio'></input> 
                Chocolate Foamback
            </li>
            <li>
                <input type='radio'></input> 
                Jujubee Baetis
            </li> 
        
        </ul>
                {/* <Answer text={this.props.answerArray[0]}/> */}
            </div>

        )
    }

}


export default AnswerBox;