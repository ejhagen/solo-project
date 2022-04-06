const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs/promises');
const path = require('path');
// const bodyParser = require('body-parser');

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const flyApiRouter = require(path.join(__dirname, '/router'));
// app.use('/router', flyApiRouter);
// app.use('/assets', express.static('./client/assets'));
const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `fileController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in fileController.${method}. Check server logs for more details.` }
    };
  };

const controller = {};
controller.getFishData = (req, res, next) => {
    console.log('request has reached getFishData controller')
    // console.log('req.body', req.body)
    fs.readFile(path.resolve(__dirname, '../db.json'), 'UTF-8')
    .then(data => {
        // console.log(data)
      const parsedData = JSON.parse(data);
      console.log(parsedData[0])
      res.locals.fishData = parsedData[0];
      return next();
    })
    .catch(err => next(createErr({
      method: 'getFishData', 
      status: 404,
      type: 'when reading file', 
      err: err, 
    })));
    
}

app.get('/fishdata', 
controller.getFishData, 
(req, res) => {
    console.log('--> req through get fishdata in server')    
    res.status(200).send(res.locals.fishData)
});

//^^^^^ more specific route requests go above ^^^^^
//routing methods go here

//handle get requests to root directory serving index.html
app.get('/', (req, res) => {
    console.log('--> request went through root server req')
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
});


//catch all for invalid file paths
app.use('/*', (req, res) => {
    console.log('not a valid filepath');
    res.status(404).send('This is not a valid Filepath')
});

//global error handler
app.use((err, req, res, next) => {
    console.log('global error handler invoked')
    const defaultErr = {
      log: 'express error handler caught error',
      status: 400,
      message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign({}, defaultErr, err)
    return res.status(errorObj.status).send(errorObj.message)
});

//server listen
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
});

module.exports = app;