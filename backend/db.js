const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "@Golu2503",
    host: "localhost",
    port: 5432,
    database: "usersdb"
});

module.exports = pool;