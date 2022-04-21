const fs = require('fs');


const fishbase = [
    {
        id: 1,
        imgsrc: 'https://cdn.shoplightspeed.com/shops/606813/files/31004786/umpqua-barrs-emerger-bwo.jpg',
        question: 'Which fly is this?',
        answerArray: [`Barrs Emerger`, `Zebra Midge`, `Chocolate Foamback`, `Jujubee Baetis`],
        correctAnswer: `Barrs Emerger`,
        addInfo: `This is a classic tailwater fly for the winter! Make sure to get it down in the water-column to where the fish are feeding`,
        haveSeen: false
    },
    {
        id: 2,
        imgsrc: './client/assets/woolybugger.jpg',
        question: 'What kind of fly is this',
        answerArray: ['Elk Hair Caddis', 'Wooly Bugger', 'The Fly Formerly Known as Prince', 'Royal Wulff'],
        correctAnswer: 'Wooly Bugger',
        addInfo: `You can fish Wooly Buggers anytime of the year. Dead drift them downstream then do a Leisenring Lift. Olive and black are the most successful patterns.`,
        haveSeen: false
    },
    {
        id: 3,
        imgsrc: './client/assets/parachute_adams.jpg',
        question: 'Which fly is this?',
        answerArray: ['Beadhead Prince Nymph', 'RS2', 'Wooly Bugger', 'Parachute Adams'],
        correctAnswer: 'Parachute Adams',
        addInfo: `One of the most distinguishable flies for seasoned fishermen. This classic dry fly can be fished with a dropper or by itself if the fish are rising.`,
        haveSeen: false
    },
    {
        id: 4,
        imgsrc: './client/assets/rainbowtrout.jpg',
        question: 'GET THE NET! What did you catch?',
        answerArray: ['Rainbow Trout', 'Cutthroat Trout', 'Pink Salmon', 'Brown Trout'],
        correctAnswer: 'Rainbow Trout',
        addInfo: `Oncorhynchus mykiss. A member of the salmonid family, along with the anadromous Steelhead. Rainbow trout can be found in most coldwater streams.`,
        haveSeen: false
    },
    {
        id: 5,
        imgsrc: './client/assets/srfsct.jpg',
        question: 'Woah! FISH ON! What species did you catch?',
        answerArray: ['Brook Trout', 'Brown Trout', 'Snake River Fine Spotted Cutthroat Trout', 'Dolly Varden'],
        correctAnswer: 'Snake River Fine Spotted Cutthroat Trout',
        addInfo: `The Snake river fine spotted cutthroat trout is a sub-species of the cutthroat trout, known for the red marking under their.... you guessed it, Throat. `,
        haveSeen: false
    },
    {
        id: 6,
        imgsrc: './client/assets/brookie.jpg',
        question: 'WOOOAH, FISH ON! What species is this?',
        answerArray: ['Rainbow Trout', 'Brook Trout (Char)', 'Bluegill', 'Walleye'],
        correctAnswer: 'Brook Trout (Char)',
        addInfo: `Trout may be a misnomer here. The brook trout is actually a member of the char family which is a relative to the Salmonid family `,
        haveSeen: false
    }
]

const fishdata = JSON.stringify(fishbase)
fs.writeFile('db.json', fishdata, (err) => {
    if (err) {
        throw err;
    }
    console.log('db JSON data is saved')
})