const express = require('express');
const router = express.Router();
const controller = require('./controller');

//on first instance should retrieve a data object and random after that
// router.get('/',

//     controller.getFishData,
//     (req, res) => {
//       console.log('---> using router in router file')
//       console.log('res.body', res.body)
//       console.log('res.locals.item', res.locals.item)
//       return res.status(200).send(res.locals.item)
    
//     // .json('newFishdata') //should be res.locals.newFishData
    
// })

// module.exports = router;