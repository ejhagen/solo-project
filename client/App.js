import React, { Component } from 'react';
import DisplayBox from './DisplayBox';


//TODO:
// children? -- displaybox --answerbox -answer
//render functionality
//fetch request?
//onclick function for submit button --> invoke check answer fx
//check answer function
//onclick function for next button

console.log('--> console.log from App.js ')


class App extends Component {
  
  
  
    render() {
        
        return ( 
          <div id='container'>
              <h1> --- FLY-DENTIFIER  --- </h1>
              <h4> A fly fisher's online companion </h4>
              <div><DisplayBox /></div>            
          </div>
            
        )
    }
}

//randomizes the order of the array to be passed into fetch request
const databaseArray = [1, 2, 3, 4, 5, 6]
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5); 


  // ReactDOM.render(<App />, document.getElementById('app'));
export default App;