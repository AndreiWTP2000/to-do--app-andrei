const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 3000,
  database: "todoapp",
});

module.exports = pool;
