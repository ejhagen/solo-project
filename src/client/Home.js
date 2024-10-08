import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="displayBox">
            <h1>Fly-dentifier</h1>
            <h2>A fly fishers online companion</h2>

            <nav>
                <div className="center">
                    <Link to="quiz">Start quiz</Link>
                </div>
                <div className="center">
                    <Link to="addAFly">Add a Fly to our Database</Link>
                </div>
            </nav>

            <p> How this site works:</p>
            <p> How to take the quiz:</p>
            <p> How to add a fly:</p>
        </div>
    )
}

export default Home
