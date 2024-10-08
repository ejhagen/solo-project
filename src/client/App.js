import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Question from './Question'
import AddAFly from './AddAFly'
import Home from './Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="quiz" element={<Question />} />
                <Route path="addAFly" element={<AddAFly />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
