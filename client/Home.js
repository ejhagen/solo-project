import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <nav>
        <Link to="quiz">Start quiz</Link>
        <Link to="addAFly">Add a Fly to our Database</Link>
      </nav>
      <p>How this site works:</p>
      <p> How to take the quiz:</p>
      <p> How to add a fly:</p>
    </div>
  );
};

export default Home;
