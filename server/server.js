const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = require('./router')
app.use(express.json())

app.use('/assets', express.static(path.join(__dirname, '../client/assets/')))
// TODO: figure out if we need routing for other static paths
app.use('/scss', express.static(path.join(__dirname, '../client/assets/scss/')))
// router for fishdata requests
app.use('/fishdata', router)

// handle get requests to root directory serving index.html
app.get('/', (req, res) => {
    console.log('--> request went through root server req')
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
})

// catch all for invalid file paths
app.use('/*', (req, res) => {
    console.log('not a valid filepath')
    res.status(404).send('This is not a valid Filepath')
})

// global error handler
app.use((err, req, res, next) => {
    console.log('global error handler invoked')
    const defaultErr = {
        log: 'express error handler caught error',
        status: 400,
        message: { err: 'An error occurred' },
    }
    const errorObj = Object.assign({}, defaultErr, err)
    return res.status(errorObj.status).send(errorObj.message)
})

// server listen
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
})

// export module
module.exports = app
