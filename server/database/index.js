const mysql = require('mysql2');

const database = 'mydb';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: database,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

  module.exports = connection;