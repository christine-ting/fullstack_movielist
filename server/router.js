const router = require('express').Router();
const controllers = require('./controllers');

router
  .route('/movies')
  .get(controllers.get)
  .post(controllers.post)
  .put(controllers.put);

router
  .route('/directors')
  .get(controllers.getDirectors);

router
  .route('/movies/:id')
  .delete(controllers.delete);

module.exports = router;