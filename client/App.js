import React, { Component } from 'react';

//TODO:
// children?
//render functionality
//fetch request?
//onclick function for submit button --> invoke check answer fx
//check answer function
//onclick function for next button

console.log('--> console.log from App.js ')
console.log('--> script tag in index.html is commented out!!! ')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {           
            // provisional state template
            questionID: 1,
            question: 'Which fly is this?',
            answers: ['a', 'b', 'c', 'd'],
            correctAnswer: 'c',
            img: 'source.jpg',
            additionalInfo: ['Additional info about this fly or fish']
        }
    }

    componentDidMount() {
        // fetch('/')//want to fetch from the db calling 'TBD' variable relating to id in fly database object
        // .then(response => response.json())
        // .then(console.log(response)) //eventually pass a callback for where we want to put this data
        // .catch(err => console.log('EH error in component did mount fetch request'))

    }

    render() {
        //add conditional render logic here
        return (
            //add jsx here (or html in '<>' or JS in '{}')
          <div>Div Container in App Component</div>
        //   <container />
        )
    }
}

export default App;