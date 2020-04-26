const models = require('../database/models');

const controller = {
  get: (req, res) => {
    models.get((err, results) => {
      if (err) {
        res.status(400).send(err);

      } else {
        res.status(200).send(results);
      }
    });
  },
  getDirectors: (req, res) => {
    models.getDirectors((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post: (req, res) => {
    const movie = req.body;
    models.post(movie, (err, results) => {
      if (err) {
        res.status(201).send(err);

      } else {
        res.status(201).send('new movie posted');
      }
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models.delete(id, (err, results) => {
      if (err) {
        res.status(402).send(err);

      } else {
        res.status(202).send('movie deleted');
      }
    });
  },
  put: (req, res) => {
    const { director_name } = req.body;
    models.put(director_name, (err, results) => {
      if (err) {
        res.status(403).send(err);

      } else {
        res.status(203).send(results);
      }
    });
  }
};

module.exports = controller;