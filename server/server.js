const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//TODO:
//routing methods
//catch all route
//configure global error handler




//handle get requests to root directory serving index.html
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
});

//routing methods go here


//configure global error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Something broke')
});

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
});