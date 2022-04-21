//either require in a db (like in unit10 with a pool or possibly with mongodb?)
const controller = {};


controller.getFishData = async (req, res, next) => {
  //might need to destructure req.body here depending on desired implementation
  // console.log('--> req went through controller')
  // res.locals.item = item;
  // return next();
  fetch('./db.js')
    .then((result) => { 
    console.log(result)
    res.locals.fishData = result;
    return next()
    })
  .catch((err) => next({
    log: 'error in getFishData middleware',
    status: 500,
    message: {err: 'failed to get new fly data'}
  }));
};

controller.postFishData = async (req, res, next) => {
  console.log('req.query', req.query)
  
}

module.exports = controller;

// const controller = {};
// controller.getFishData = (req, res, next) => {
//     console.log('request has reached getFishData controller')
//     // console.log('req.body', req.body)
//     fs.readFile(path.resolve(__dirname, '../db.json'), 'UTF-8')
//     .then(data => {
//         // console.log(data)
//       const parsedData = JSON.parse(data);
//       console.log(parsedData[0])
//       res.locals.fishData = parsedData[0];
//       return next();
//     })
//     .catch(err => next(createErr({
//       method: 'getFishData', 
//       status: 404,
//       type: 'when reading file', 
//       err: err, 
//     })));
    
// }
