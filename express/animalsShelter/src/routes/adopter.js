const router = require('express').Router();
const adopterController = require('../controllers/adopter.controller');

router.route('/signup').post(adopterController.signup);
router.route('/signin').post(adopterController.signin);

module.exports = router;