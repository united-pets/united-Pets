const mysql = require('mysql2');

const database = 'mydb';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'taiebBelaid159632',
  database: database

});

  module.exports = connection;