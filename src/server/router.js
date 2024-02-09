const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

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
