//either require in a db (like in unit10 with a pool or possibly with mongodb?)
const fetchUrl = 'stringofurl.com'

const controller = {};


controller.getFishdata = (req, res, next) => {
    //might need to destructure req.body here depending on desired implementation
    fetch(fetchUrl)
    .then((result) => { console.log(result)
        res.locals.fishData = result;
        return next()
    })
    .catch((err) => next({
        log: 'error in getFishData middleware',
        status: 500,
        message: {err: 'failed to get new fly data'}
    }));
}

module.exports = controller;