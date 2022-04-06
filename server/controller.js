//either require in a db (like in unit10 with a pool or possibly with mongodb?)
// const controller = {};


// controller.getFishData = (req, res, next) => {
//     //might need to destructure req.body here depending on desired implementation
    

//     // console.log('--> req went through controller')
//     // res.locals.item = item;
//     // return next();
//     fetch('./db.js')
//     .then((result) => { 
//         console.log(result)
//         res.locals.fishData = result;
//         return next()
//     })
//     .catch((err) => next({
//         log: 'error in getFishData middleware',
//         status: 500,
//         message: {err: 'failed to get new fly data'}
//     }));
// }

// module.exports = controller;