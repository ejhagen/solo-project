import React, { Component } from 'react';
import AnswerBox from './AnswerBox';
import Buttons from './Buttons';
import Question from './Question';
import Image from './Image';


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

  // Fetch call to db for fishdata
  componentDidMount() {
    // console.log('--> component did mount fired')   
    // fetch('/fishdata')
    //     .then(response =>  response.json())
    //     .then(fishdata => this.setState({fishdata}))        
    // .catch((err) => console.log('EH error in component did mount fetch request'))
  }
  
  // method: checks answer against selected button and calls set state causing an update to 

  render() {
    
     
    return (
      <div id="displayBox">        
        
        <Image imgSource={this.state.imgsrc}/>
        <Question currQuestion={this.state.question}/>
        <AnswerBox currQuestion={this.state.question} answersArray={this.state.answerArray} correctAnswer={this.state.correctAnswer} addInfo={this.props.addInfo}/>

        {/* <Buttons />  */}
       </div>
       
    )
  }

}




export default DisplayBox;