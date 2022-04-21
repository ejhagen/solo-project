import React, { Component } from 'react';
import AnswerBox from './AnswerBox';
import Buttons from './Buttons';
import Question from './Question';
import Image from './Image';
import InputBox from './InputBox';

class DisplayBox extends Component {
  constructor(props) {
    super(props); 
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleNext = this.handleNext.bind(this);
  }
  // handleSubmit = () => {
  //   console.log('handlesubmit invoked')
  // }

  // handleNext = () => {
  //   console.log('handleNext invoked')
  // }

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
        
        <Image imgSource={this.props.imgsrc}/>
        <Question currQuestion={this.props.question}/>
        <AnswerBox answersArray={this.props.answerArray}/>
        <Buttons /> 
       </div>
       
    )
  }

}




export default DisplayBox;