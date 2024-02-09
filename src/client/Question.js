import React from 'react'
import { useState, useEffect } from 'react'

let flyData = []
let number = 0
let numberCorrect = 0

const Question = () => {
    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState('question')
    const [image, setImage] = useState('')
    const [cAnswer, setCAnswer] = useState('')
    const [addInfo, setAddInfo] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [isCorrect, setIsCorrect] = useState(null)
    const [quizOver, setQuizOver] = useState(false)

    const feedback =
        (isCorrect ? `That is correct! ` : `That is incorrect. `) +
        `The correct answer is ${cAnswer}.`

    useEffect(() => {
        console.log('Use effect triggered - getting flydata')
        getFlyData()
    }, [])

    async function getFlyData() {
        console.log('get fly data invoked')

        const res = await fetch('http://localhost:3000/fishdata')
        const json = await res.json()
        console.log('json', json)
        flyData = json
        setQuestion(json[number].question)
        setAnswers(json[number].answerarray.split(','))
        setImage(json[number].imgsrc)
        setCAnswer(json[number].correctanswer)
        setAddInfo(json[number].addinfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit clicked', selectedOption)
        if (!selectedOption || submitted) {
            console.log('selection is empty')
        } else {
            if (selectedOption === cAnswer) {
                setSubmitted(true)
                setIsCorrect(true)
                numberCorrect++
            } else {
                setSubmitted(true)
                setIsCorrect(false)
            }
        }
    }

    const handleNext = () => {
        console.log('Next button clicked')
        number++
        // setQuestionNumber((questionNumber) => questionNumber + 1);
        if (!flyData[number]) {
            endQuiz()
        } else {
            setQuestion(flyData[number].question)
            setAnswers(flyData[number].answerarray.split(','))
            setImage(flyData[number].imgsrc)
            setCAnswer(flyData[number].correctanswer)
            setAddInfo(flyData[number].addinfo)
            setSubmitted(false)
            setIsCorrect(null)
            setSelectedOption('')
        }
    }
    const getUpdatedImageSource = (img) => {
        const prefix = './public'
        const stripped = img.split('')
        stripped.shift()
        const joined = stripped.join('')
        const updatedString = prefix + joined

        return updatedString
    }
    if (image) {
        getUpdatedImageSource(image)
    }
    const test = './public/assets/rainbowtrout.jpg'
    const endQuiz = () => {
        console.log(
            `The quiz is complete, good job! You got ${numberCorrect} questions correct`
        )
        setQuizOver(true)
        //TODO: display something that says ^^
        //wait? and redirect
    }

    // console.log("flydata | questNum", flyData, questionNumber);

    return (
        <div>
            <h1>Welcome to the quiz</h1>
            {quizOver
                ? `The quiz is complete, good job! You got ${numberCorrect} questions correct`
                : null}
            {!quizOver ? (
                <>
                    <div>
                        <img
                            src={getUpdatedImageSource(image)}
                            alt="current fish/fly"
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <p>Question: {question}</p>

                        <div>
                            <ul className="list">
                                {submitted ? feedback : ''}
                                {submitted ? addInfo : ''}

                                {answers.map((answer) => {
                                    return (
                                        <li key={answer}>
                                            <input
                                                type="radio"
                                                name="answer"
                                                id={answer}
                                                key={answer}
                                                value={answer}
                                                onChange={(e) => {
                                                    setSelectedOption(
                                                        e.target.value
                                                    )
                                                }}
                                            />
                                            <label htmlFor={answer}>
                                                {answer}
                                            </label>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div id="buttonBox">
                            <span>
                                <button
                                    className="button"
                                    type="submit"
                                    name="submit"
                                >
                                    Submit Answer
                                </button>
                            </span>
                        </div>
                    </form>
                </>
            ) : null}

            <button
                className="button"
                type="next"
                name="next"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    )
}

export default Question
