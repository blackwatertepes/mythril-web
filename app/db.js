const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = {
  query: async (text, params) => {
    const start = Date.now()
    let res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res;
  }
}
