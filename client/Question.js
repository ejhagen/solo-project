import React, { Component } from 'react';


class Question extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        

      return (
          <div id="questionBox">
               SOME TEXT HERE IN QUESTION DIV
          {/* {this.state.question} */}
          </div>        
      )
    }
}

export default Question;