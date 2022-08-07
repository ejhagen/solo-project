// require in db
const db = require("./models/fishModel");
const controller = {};

// get Fish Data Middleware
controller.getFishData = async (req, res, next) => {
  try {
    // dbq select statement
    // const params = [id]
    const getFishQ = `SELECT * FROM fish;`;

    const getFish = await db.query(getFishQ);
    // console.log('--> query for all fish');
    console.log("getfish.rows", getFish.rows);
    res.locals.newFish = getFish.rows;

    return next();
  } catch (err) {
    next({
      log: "error in getFishData middleware",
      status: 500,
      message: { err: "failed to get flyfish data" },
    });
  }
};

// post Fish Data Middleware
controller.postFishData = async (req, res, next) => {
  // console.log('--> routed to postFishData')
  try {
    // console.log('req.body', req.body)
    const {
      imgsrc,
      question,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
      addInfo,
    } = req.body;
    // first check that all inputs are valid
    if (
      typeof imgsrc !== "string" ||
      typeof question !== "string" ||
      typeof answerA !== "string" ||
      typeof answerB !== "string" ||
      typeof answerC !== "string" ||
      typeof correctAnswer !== "string" ||
      typeof addInfo !== "string"
    ) {
      //if not return error
      return next(err);
    }
    // add id property using randomizer? uuid?
    const id = (Math.floor(Math.random() * 10000) + 1).toString();
    // dbq insert into statement
    const addFishQ = `INSERT INTO fish VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    // need to mutate possible answers before adding to db
    const possibleAnswers =
      answerA + "," + answerB + "," + answerC + "," + answerD;
    // define haveSeen
    const haveSeen = false;

    // define params in order
    const params = [
      id,
      imgsrc,
      question,
      possibleAnswers,
      correctAnswer,
      addInfo,
      haveSeen,
    ];
    const addFish = await db.query(addFishQ, params);
    // console.log('--> added fish to db');
    res.locals.addedFish = addFish;
    return next();
  } catch (err) {
    next({
      log: "error in postFishData middleware",
      status: 500,
      message: { err: "failed toadd new flyfish data" },
    });
  }
};

module.exports = controller;
