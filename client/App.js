import React, { Component } from "react";
import DisplayBox from "./DisplayBox";
import InputBox from "./InputBox";

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1> --- FLY-DENTIFIER --- </h1>
        <h4> A fly fisher's online companion </h4>
        <div>
          <DisplayBox />
        </div>
        <div>
          <InputBox />
        </div>
      </div>
    );
  }
}
const handleSubmit = () => {
  console.log("submit button pressed");
  //if radio isn't toggled do nothing
  //check answer
};

const handleNext = () => {
  console.log("next button pressed");
};
//randomizes the order of the array to be passed into fetch request
const databaseArray = [1, 2, 3, 4, 5, 6];
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
