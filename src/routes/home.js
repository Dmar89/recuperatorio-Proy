let express = require('express');
let router = express.Router();
let homeController= require ('../controllers/homeController');



/* GET home page. */
router.get('/home',homeController.index);

module.exports = router;