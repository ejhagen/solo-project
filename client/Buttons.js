import React, { Component } from 'react';


class Buttons extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        

      return (
          <div id='buttonBox'> 
          
              
              <span>
                <button className="button" onClick={handleSubmit}>Submit Answer</button>
                <button className="button" onClick={handleNext}>Next</button>
              </span>
              
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

export default Buttons;