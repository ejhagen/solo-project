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


export default Buttons;