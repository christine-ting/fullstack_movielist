const db = require('./');

const moviesExample = [
  {
    movie_name: 'IT',
    director: 1
  },
  {
    movie_name: 'The Shining',
    director: 1
  },
  {
    movie_name: 'The Hangover',
    director: 2
  },
  {
    movie_name: 'Joker',
    director: 2
  }
];

const directorsExample = [
  {
    director_name: 'Stephen King'
  },
  {
    director_name: 'Todd Philips'
  }
];

directorsExample.forEach((director) => {
  const queryStr = `insert into directors(director_name) values ("${director.director_name}")`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('directors seeded');
    }
  });
});

moviesExample.forEach((movie) => {
  const queryStr = `insert into movies(movie_name, director) values ("${movie.movie_name}", ${movie.director})`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(' movies seeded');
    }
  });
});
db.end();