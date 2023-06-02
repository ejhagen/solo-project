import { useState } from "react";
import React from "react";

const AddAFly = () => {
  const [fly, setFly] = useState("Parachute Adams");
  const [question, setQuestion] = useState("Can you identify this dry fly?");
  const [imgSrc, setImgSrc] = useState(
    "https://www.flypictures.com/woolybugger.jpg"
  );
  const [answerA, setAnswerA] = useState("Possible Answer 1");
  const [answerB, setAnswerB] = useState("Possible Answer 2");
  const [answerC, setAnswerC] = useState("Possible Answer 3");
  const [answerD, setAnswerD] = useState("Possible Answer 4");
  const [addInfo, setAddInfo] = useState(
    "Some additional information about the fly"
  );

  return (
    <div className="AddAFly">
      <p>Add your own fly to our database:</p>
      <p>Place instructions here!</p>

      <form className="form">
        <label htmlFor="FlyName">
          Fly Name:
          <input
            id="flyName"
            value={fly}
            placeholder="fly name"
            onChange={(e) => {
              setFly(e.target.value);
            }}
          />
        </label>

        <label htmlFor="question">
          Question:
          <input
            id="question"
            value={question}
            placeholder="Question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </label>

        <label htmlFor="imgSrc">
          Image Source:
          <input
            id="imgSrc"
            value={imgSrc}
            placeholder="Image Source"
            onChange={(e) => {
              setImgSrc(e.target.value);
            }}
          />
        </label>

        <label htmlFor="answerA">
          Answer A:
          <input
            id="answerA"
            value={answerA}
            placeholder="Answer A"
            onChange={(e) => {
              setAnswerA(e.target.value);
            }}
          />
        </label>

        <label htmlFor="answerB">
          Answer B:
          <input
            id="answerB"
            value={answerB}
            placeholder="Answer B"
            onChange={(e) => {
              setAnswerB(e.target.value);
            }}
          />
        </label>

        <label htmlFor="answerC">
          Answer C:
          <input
            id="answerC"
            value={answerC}
            placeholder="Answer C"
            onChange={(e) => {
              setAnswerC(e.target.value);
            }}
          />
        </label>

        <label htmlFor="answerD">
          Answer D:
          <input
            id="answerD"
            value={answerD}
            placeholder="Answer D"
            onChange={(e) => {
              setAnswerD(e.target.value);
            }}
          />
        </label>

        <label htmlFor="addInfo">
          Additional Info:
          <input
            id="addInfo"
            value={addInfo}
            placeholder="Additional Info"
            onChange={(e) => {
              setAddInfo(e.target.value);
            }}
          />
        </label>

        <button>Add to Fly-dentifier's Database</button>
      </form>
    </div>
  );
};

export default AddAFly;
