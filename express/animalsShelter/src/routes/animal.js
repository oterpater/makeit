const router = require('express').Router({ mergeParams: true });
const animalController = require('../controllers/animal.controller');

router.route('/').get(animalController.getAll);
router.route('/').post(animalController.create);
router.route('/:animalId').get(animalController.getOne);
router.route('/:animalId').put(animalController.update);
router.route('/:animalId').delete(animalController.delete);

module.exports = router;