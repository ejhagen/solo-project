const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//TODO:
//routing methods
//catch all route
//middleware?
const flyApiRouter = require('/flyApi');


app.use('/assets', express.static('./client/assets'))
//^^^^^ more specific route requests go above ^^^^^
//routing methods go here

//handle get requests to root directory serving index.html
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
});

app.use('/flyApi', flyApiRouter);

// app.post('/', (req, res) => {
//     res.status(200).json(res.locals) //finish out post req
// })


//catch all for invalid file paths
app.use('*', (req, res) => {
    console.log('not a valid filepath');
    res.status(404).send('This is not a valid Filepath')
});

//global error handler
app.use((err, req, res, next) => {
    console.log('global error handler invoked')
    const defaultErr = {
      log: 'express error handler caught error',
      status: 400,
      message: { err: 'A default error occurred' }
    };
    const errorObj = Object.assign({}, defaultErr, err)
    return res.status(errorObj.status).send(errorObj.message)
});

//server listen
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
});

module.exports = app;