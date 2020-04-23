var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movielist'
});

connection.connect();

module.exports = connection;