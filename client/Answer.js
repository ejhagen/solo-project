import React, { Component } from 'react';


class Answer extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        console.log(this.props.answersArray)

      return (
        <div className='answers'> 
        <ul>
            <li>
                <input type='radio'></input> 
                Barr's Emerger 
            </li>
            <li>
                <input type='radio'></input> 
                'Zebra Midge' 
            </li>
            <li>
                <input type='radio'></input> 
                'Chocolate Foamback'
            </li>
            <li>
                <input type='radio'></input> 
                'Jujubee Baetis'
            </li> 
        
        </ul>
            {/* {possibleAnswers} */}
        </div>
      )
    }
}

export default Answer;