const express = require('express')
const router = express.Router()
const controller = require('./controller')

// get request asking DB for fishData through getFishData middleware
router.get('/', controller.getFishData, (req, res) => {
    // console.log('---> using router in router file');
    return res.status(200).send(res.locals.newFish)
})

// post request sending req to postFishData middleware fx
router.post('/', controller.postFishData, (req, res) => {
    // console.log('--> using post router');
    return res.status(201).send(res.locals.addedFish)
})

module.exports = router
