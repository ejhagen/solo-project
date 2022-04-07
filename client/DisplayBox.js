import React, { Component } from 'react';
import AnswerBox from './AnswerBox';
import Buttons from './Buttons';
import Question from './Question';
import Image from './Image';



class DisplayBox extends Component {
    constructor(props) {
        super(props);
       

    }

   

  render() {
          
    return (
      <div id="displayBox">
        SOME TEXT IN DISPLAY BOX DIV
        {/* <img src={this.state.imgsrc}/> */}
        <Image />
        <Question />
        <AnswerBox />
        <Buttons />
        
        
            
      </div>
        )
    }

}




export default DisplayBox;