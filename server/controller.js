// require in db
const db = require("./models/fishModel");
const controller = {};

// get Fish Data Middleware
controller.getFishData = async (req, res, next) => {
  try {
    const getFishQ = `SELECT * FROM fish;`;
    const getFish = await db.query(getFishQ);
    // console.log("getfish.rows", getFish.rows);
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

controller.postFishData = async (req, res, next) => {
  try {
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

    if (
      typeof imgsrc !== "string" ||
      typeof question !== "string" ||
      typeof answerA !== "string" ||
      typeof answerB !== "string" ||
      typeof answerC !== "string" ||
      typeof correctAnswer !== "string" ||
      typeof addInfo !== "string"
    ) {
      return next(err);
    }

    const id = (Math.floor(Math.random() * 10000) + 1).toString();
    const addFishQ = `INSERT INTO fish VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const possibleAnswers =
      answerA + "," + answerB + "," + answerC + "," + answerD;

    const haveSeen = false;

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
