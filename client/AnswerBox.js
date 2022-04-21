import React, { Component } from 'react';


class AnswerBox extends Component {
  constructor(props) {
    super(props);        
  }

  render() {
    console.log('--> render in answer box fired')
    console.log(this.props.answerArray)
        
    // for (let i = 0; i < this.props.answerArray.length; i += 1) {
        
    //     // possibleAnswers.push(
    //     //     <Answer className='answer' key={this.props.answerArray[i]}>

    //     //         <input type='radio' value={this.props.answerArray[i]} />
    //     //         {this.props.answerArray[i]} 
    //     //     </Answer>
    //     // )
    // }

    // Needs handleClick event that sets state

    return (
      <div >

        <div id="answerBox">
            
            {this.state.currQuestion}
            
          <ul>
            {this.state.answersArray.forEach((el) => {
              <li>
                  <input type="radio" id="" name={el} value=""></input>

              </li>
            })}
            {/* <li>
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
            </li>  */}
          </ul>
        </div>

        <div>        
            <div id='buttonBox'>                  
                <span>
                    <button className="button" type="submit">Submit Answer</button>
                <button className="button">Next</button>
                </span>              
            </div> 
        </div> 

        </div>
    )
    }

}


export default AnswerBox;