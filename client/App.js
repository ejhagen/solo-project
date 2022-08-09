import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from "react-dom";
import Question from "./Question";
import AddAFly from "./AddAFly";
import Home from "./Home";

// import React, { Component } from "react";
// import DisplayBox from "./DisplayBox";
// import InputBox from "./InputBox";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Fly-dentifier</h1>
      <h2>A fly fisher's online companion</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Question />} />
        <Route path="addAFly" element={<AddAFly />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       questionArray: [],
//       questionNumber: 0,
//     };
//     this.handleNext = this.handleNext.bind(this);
//   }

//   handleNext() {
//     console.log("handle next clicked in App component");
//   }

//   componentDidMount() {
//     // console.log('--> component did mount fired')
//     fetch("/fishdata")
//       .then((response) => response.json())
//       // .then(fishdata => console.log('answerArray,', fishdata.answerarray))
//       .then((fishdata) => this.setState(this.state.questionArray))
//       .catch((err) =>
//         console.log("EH error in component did mount fetch request")
//       );
//   }

//   render() {
//     return (
//       <div id="container">
//         <h1> --- FLY-DENTIFIER --- </h1>
//         <h4> A fly fisher's online companion </h4>
//         <div>
//           <DisplayBox
//             imgsrc={this.state.imgsrc}
//             question={this.state.question}
//             answerArray={this.state.answerArray}
//             correctAnswer={this.state.answerArray}
//             addInfo={this.state.addInfo}
//             handleNext={this.handleNext}
//             currQuestion={this.state.questionArray[this.state.questionNumber]}
//           />
//         </div>
//         <div>{/* <InputBox /> */}</div>
//       </div>
//     );
//   }
// }
