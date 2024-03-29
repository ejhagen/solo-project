require('dotenv').config()

const PG_URL = process.env.DBURL
const { Pool } = require('pg')
const pool = new Pool({
    connectionString: PG_URL,
})

module.exports = {
    query: (text, params, callback) => {
        // console.log('executed query', text);
        return pool.query(text, params, callback)
    },
}
