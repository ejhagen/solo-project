import React, { Component } from 'react';


class Question extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        
        console.log('state in displaybox', this.state)
      return (
          <div id="questionBox">
            {/* IF I WAS GOOD AT PROGRAMMING THERE WOULD BE A QUESTION HERE */}
           {this.props.currQuestion}
          </div>        
      )
    }
}

export default Question;