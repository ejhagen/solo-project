import React, { Component } from 'react';
import AnswerBox from './AnswerBox';
import Buttons from './Buttons';
import Question from './Question';
import Image from './Image';


class DisplayBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
  };

  componentDidMount() {
    // console.log('--> component did mount fired')   
    // fetch('/fishdata')
    //     .then(response =>  response.json())
    //     .then(fishdata => this.setState({fishdata}))        
    // .catch((err) => console.log('EH error in component did mount fetch request'))
  }
   

  render() {
     
    return (
      <div id="displayBox">        
        
        <Image imgSource={this.state.imgsrc}/>
        <Question currQuestion={this.state.question}/>
        <AnswerBox answersArray={this.state.answerArray}/>
        <Buttons />
       </div>
    )
  }

}


const handleSubmit = () => {
  console.log('submit button pressed')
  //if radio isn't toggled do nothing
  //check answer
}

const handleNext = () => {
  console.log('next button pressed')
}


export default DisplayBox;