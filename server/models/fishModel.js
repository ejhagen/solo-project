const { Pool } = require('pg');

const PG_URL = 'postgres://zuaplohv:cyy4fBp1qj27mVv-81zrGuwO7As5YEbt@heffalump.db.elephantsql.com/zuaplohv';

const pool = new Pool({
  connectionString: PG_URL
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};




// CREATE TABLE fish(
//   id varchar(255),
//   imgsrc VARCHAR,
//   QUESTION VARCHAR,
//   ANSWER VARCHAR,
//   