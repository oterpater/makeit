const router = require('express').Router();
const shelterController = require('../controllers/shelter.controller');

router.route('/').get(shelterController.getAll);
router.route('/').post(shelterController.create);
router.route('/:id').get(shelterController.getOne);
router.route('/:id').put(shelterController.update);
router.route('/:id').delete(shelterController.delete);

module.exports = router;