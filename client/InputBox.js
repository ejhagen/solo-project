import { name } from 'file-loader';
import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        imgsrc: '',
        question: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        correctAnswer: '',
        addInfo: ''       
      }

      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target; 
    const name = target.name;    
    const value = target.type === 'imgsrc'

    this.setState({    
      [name]: value
    })
  }

  handleSubmit(event) {
    
    event.preventDefault();
    
  }

  
    render() {
      return (
      
        <div id="inputDiv">        
        
        <h3>Add your own question!</h3>
        <form id="form" onSubmit={this.handleSubmit}>                 

          <div>
            <label>
                Absolute Image Source URL: 
                <input type="text" name="imgsrc" onChange={this.handleInputChange} value={this.state.imgsrc}/>
            </label>          
            </div>

            <div>
            <label>
                Question:
                <input type="text" name="question" onChange={this.handleInputChange} value={this.state.question}/>
            </label>        
            </div>
            
            <div>
            <label>
                Answer 'A':
                <input type="text" name="answerA" onChange={this.handleInputChange} value={this.state.answerA}/>
            </label>
            </div>

            <div>
            <label>
                Answer 'B':
                <input type="text" name="answerB" onChange={this.handleInputChange} value={this.state.answerB}/>
            </label>
            </div>

            <div>
            <label>
                Answer 'C':
                <input type="text" name="answerC" onChange={this.handleInputChange} value={this.state.answerC}/>
            </label>
            </div>

            <div>
            <label>
                Answer 'D':
                <input type="text" name="answerD" onChange={this.handleInputChange} value={this.state.answerD}/>
            </label>
            </div>

            <div>
            <label>
                Correct Answer: 
                <input type="text" name="correctAnswer" onChange={this.handleInputChange} value={this.state.correctAnswer}/>
            </label>
            </div>

            <div>
            <label>
                Additional Info:  
                <input type="text" name="addInfo" onChange={this.handleInputChange} value={this.state.addInfo}/>
            </label>
            </div>
            
           <input type="submit" value="Add to Database" />
        </form>
      </div>
    )
  };
};

export default InputBox;