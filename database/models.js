const db = require('./');

const models = {
  get: (callback) => {
    const queryStr = 'SELECT movies.id, movie_name, directors.director_name \
                      FROM movies INNER JOIN directors ON movies.director = directors.id';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  getDirectors: (callback) => {
    const queryStr = 'SELECT director_name FROM directors;';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  post: (movie, callback) => {
    const { director_name, movie_name } = movie;
    const queryDirector = `INSERT INTO directors (director_name) VALUES ("${director_name}");`;
    const queryMovie = `INSERT INTO movies (movie_name, director) VALUES \
                        ("${movie_name}", LAST_INSERT_ID());`;
    db.query(queryDirector, (err, results) => {
      db.query(queryMovie, (err, results) => {
        callback(err, results);
      });
    });
  },
  delete: (id, callback) => {
    const queryStr = `DELETE FROM movies WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  put: (director_name, callback) => {
    const queryStr = `SELECT movies.id, movie_name, directors.director_name \
                      FROM movies INNER JOIN directors ON movies.director = directors.id \
                      AND directors.director_name = "${director_name}";`;
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  }
};

module.exports = models;