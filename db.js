const fs = require('fs');


const fishbase = [
    {
        id: 1,
        imgsrc: './client/assets/barremerger.jpg',
        question: 'Which fly is this?',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'a',
        addInfo: `additional info about answer`,
        haveSeen: false,
    },
    {
        id: 2,
        imgsrc: './client/assets/woolybugger.jpg',
        question: 'What kind of fly is this',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'b',
        addInfo: `additional info about answer`,
        haveSeen: false,
    },
    {
        id: 3,
        imgsrc: './client/assets/parachute_adams.jpg',
        question: 'Which fly is this?',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'c',
        addInfo: `additional info about answer`,
        haveSeen: false,
    },
    {
        id: 4,
        imgsrc: './client/assets/rainbowtrout.jpg',
        question: 'GET THE NET! What did you catch?',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'a',
        addInfo: `additional info about answer`,
        haveSeen: false,
    },
    {
        id: 5,
        imgsrc: './client/assets/srfsct.jpg',
        question: 'Woah! FISH ON! What species did you catch?',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'b',
        addInfo: `additional info about answer`,
        haveSeen: false,
    },
    {
        id: 6,
        imgsrc: './client/assets/brookie.jpg',
        question: 'WOOOAH, FISH ON! What species is this?',
        answerArray: ['a', 'b', 'c', 'd'],
        correctAnswer: 'c',
        addInfo: `additional info about answer`,
        haveSeen: false,
    }
];

const fishdata = JSON.stringify(fishbase)
fs.writeFile('db.json', fishdata, (err) => {
    if (err) {
        throw err;
    }
    console.log('db JSON data is saved')
})