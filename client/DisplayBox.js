import React, { Component } from 'react';
import AnswerBox from './AnswerBox';
import Buttons from './Buttons';
import Question from './Question';
import Image from './Image';


class DisplayBox extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      imgsrc: '',
      question: '',
      answerArray: '',  
      correctAnswer: '',
      addInfo: ''  
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleNext = this.handleNext.bind(this);
  }
  // handleSubmit = () => {
  //   console.log('handlesubmit invoked')
  // }

  // handleNext = () => {
  //   console.log('handleNext invoked')
  // }

  // Fetch call to db for fishdata
  componentDidMount() {
    console.log('--> component did mount fired')   
    fetch('/fishdata')
        .then(response =>  response.json())
        // .then(fishdata => console.log('answerArray,', fishdata.answerarray))
        .then(fishdata => this.setState({
          imgsrc: fishdata.imgsrc,
          question: fishdata.question,
          answerArray: fishdata.answerarray,
          correctAnswer: fishdata.correctanswer,
          addInfo: fishdata.addinfo
         }))        
    .catch((err) => console.log('EH error in component did mount fetch request'));
  };
  
  

  render() {
    
    return (
      <div id="displayBox">         
        <Image imgSource={this.state.imgsrc}/>        
        <AnswerBox currQuestion={this.state.question} 
        answersArray={this.state.answerArray} 
        correctAnswer={this.state.correctAnswer} 
        addInfo={this.props.addInfo}
        />
      </div>
       
    );
  };
};




export default DisplayBox;