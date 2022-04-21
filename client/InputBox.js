import { name } from 'file-loader';
import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        imgsrc: '',
        question: '',
        possibleAnswers: '',
        correctAnswer: '',
        addInfo: ''       
      }

      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target; 
    // const imgsrc = target.imgsrc;
    // const question = target.question;
    // const possibleAnswers = target.possibleAnswers;
    // const correctAnswer = target.correctAnswer;
    // const addInfo = target.addInfo;

    const name = target.name;
    // const value = target.type === 'imgsrc' ? target.value: 
    // target.type === 'question' ? target.value:
    // target.type === 'possibleAnswers' ? target.value:
    // target.type === 'correctAnswer' ? target.value:
    // target.type === 'addInfo' ? target.value: console.log('1');
    const value = target.type === 'imgsrc'

    this.setState({
    //   [imgsrc]: value,
    //   [question]: value,
    //   [possibleAnswers]: value,
    //   [correctAnswer]: value,
    //   [addInfo]: value
      [name]: value
    })
  }

  handleSubmit(event) {

  }

  
    render() {
      return (
      
        <div id="inputDiv">        
        
        <h3>Add your own question!</h3>
        <form id="form" onSubmit={this.handleSubmit}>                 

            <div>
            <label>
                Absolute Image Source URL: 
                <input type="text" name="imgsrc" onChange={this.handleInputChange} value={this.state.value}/>
            </label>          
            </div>

            <div>
            <label>
                Question:
                <input type="text" name="question" onChange={this.handleInputChange} value={this.state.value}/>
            </label>        
            </div>
            
            <div>
            <label>
                Possible Answers:
                <input type="text" name="possibleAnswers" onChange={this.handleInputChange} value={this.state.value}/>
            </label>
            </div>

            <div>
            <label>
                Correct Answer: 
                <input type="text" name="correctAnswer" onChange={this.handleInputChange} value={this.state.value}/>
            </label>
            </div>

            <div>
            <label>
                Additional Info:  
                <input type="text" name="addInfo" onChange={this.handleInputChange} value={this.state.value}/>
            </label>
            </div>
            
           <input type="submit" value="Add to Database" />
        </form>
      </div>
    )
  };
};

export default InputBox;