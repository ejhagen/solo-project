import React, { Component } from 'react';

class AnswerBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: 2,
            // imgsrc: 'woolybugger.jpg',
            // question: 'What kind of fly is this',
            // answerArray: ['a', 'b', 'c', 'd'],
            // correctAnswer: 'b',
            // addInfo: `additional info about answer`,
            // haveSeen: false,
        }
    }

    render() {
        
        return (
            <div id="answerBox" style={styles.answerBox}>
                <Answer/>
            </div>

        )
    }

}

const styles = {
    answerBox: {
      background: 'blue',
      border: '1px black solid',
    //   width: '50%',
      display: 'flex',
    //   flexDirection: 'column',
      alignItems: 'center',
    //   padding: '10px',
    },
};

export default AnswerBox;