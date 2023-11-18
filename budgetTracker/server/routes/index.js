let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage); 
router.get('/contact', indexController.displayContactPage); 

router.get('/privacy', indexController.displayPrivacyPage); 
module.exports = router;
