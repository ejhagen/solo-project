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
  
  componentDidMount() {
    console.log('--> component did mount fired')   
    // fetch('/fishdata')
    //     .then(response =>  console.log(response))
    //     .then(fishdata => this.setState({fishdata}))        
    // .catch((err) => console.log('EH error in component did mount fetch request'))
    
    // this.setState({
    //     id: 1,
    //     imgsrc: './assets/barremerger.jpg',
    //     question: 'Can you identify this fly?',
    //     answerArray: [
    //     'Barr\'s Emerger',
    //     'Parachute Adams',
    //     'Pat\'s Rubber Legs',
    //     'Mercury Midge'
    //     ],
    //     correctAnswer: 'Barr\'s Emerger',
    //     addInfo: `The Barr's emerger is a classic tailwater fly. Fish a size 22 in the winter when midge hatches are most productive`,
    //     haveSeen: false,
    // })

}  
  
    render() {
      
      console.log('this.state in App.js')
        return ( 
          <div id='container'>
              <h1> --- FLY-DENTIFIER  --- </h1>
              <h4> A fly fisher's online companion </h4>
              <div><DisplayBox /></div>
              
              
                {console.log('app.js rendered')}
          </div>
            
        )
    }
}

//randomizes the order of the array to be passed into fetch request
const databaseArray = [1, 2, 3, 4, 5, 6]
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5); 


  // ReactDOM.render(<App />, document.getElementById('app'));
export default App;