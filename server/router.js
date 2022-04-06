const express = require('express');
const router = express.Router();
const controller = require('/controller');

//on first instance should retrieve a data object and random after that
router.get('/', controller.getFishData, (req, res) => {
    res.status(200).json('newFishdata') //should be res.locals.newFishData
})

module.exports = router;