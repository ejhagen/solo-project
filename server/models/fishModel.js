const { Pool } = require("pg");

const PG_URL =
  "postgres://zuaplohv:cyy4fBp1qj27mVv-81zrGuwO7As5YEbt@heffalump.db.elephantsql.com/zuaplohv";

const pool = new Pool({
  connectionString: PG_URL,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// CREATE TABLE fish(
//   id VARCHAR NOT NULL,
//   imgsrc VARCHAR NOT NULL,
//   question VARCHAR,
//   answerArray VARCHAR,
//   correctAnswer VARCHAR,
//   addInfo VARCHAR,
//   haveSeen BOOLEAN);

// INSERT INTO fish VALUES (
//   '1',
//    'https://cdn.shoplightspeed.com/shops/606813/files/31004786/umpqua-barrs-emerger-bwo.jpg',
//     'Which fly is this?',
//      '["Barr\'s Emerger","Zebra Midge","Chocolate Foamback","Jujubee Baetis"]',
//       'Barr\'s Emerger',
//        `This is a classic tailwater fly for the winter! Make sure to get it down in the water-column to where the fish are feeding`,
//         false)

// Had an issue with single quotes when inserting into DB
