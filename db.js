const Pool = require('pg').Pool;
const pool = new Pool({
  user: "dima",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "newnode"
});

module.exports = pool;