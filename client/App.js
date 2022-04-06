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
console.log('--> script tag in index.html is commented out!!! ')

class App extends Component {
      
    render() {
        //add conditional render logic here based on properties of state

        return (
            //add jsx here (or html in '<>' or JS in '{}')
        //   <h1 style={styles.container}>Fly-dentifier</h1>
          <div style={styles.container}>
              <h1 style={styles.h1}> --- FLY - DENTIFIER  --- </h1>
              <h4 style={styles.h4}> A Fly fisher's online companion </h4>
              <DisplayBox />
                {console.log('app.js rendered')}
          </div>
            
        )
    }
}

//randomizes the order of the array to be passed into fetch request
const databaseArray = [1, 2, 3, 4, 5, 6]
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5); 


const styles = {
    h1: {
        display: 'flex',
        justifyContent: 'center',
         fontsize: '16px'
    },
    h4: {
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  };

export default App;