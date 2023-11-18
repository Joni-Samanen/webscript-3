let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with budget model

let Budget = require('../models/budget');
let BudgetController = require('../controllers/budget');
/* READ operation */

router.get('/', BudgetController.displayBudgetList);

/* ADD operation */
/* Get route for displaying add page - create operation */
router.get('/add', BudgetController.displayAddPage);

/* Post route for processing add page - create operation */
router.post('/add', BudgetController.processAddPage);



/* EDIT operation */
/* Get route for displaying edit page - update operation */

router.get('/edit/:id', BudgetController.displayEditPage);


/* Post route for processing edit page - update operation */
router.post('/edit/:id', BudgetController.processEditPage);

/* DELETE operation */
/* Get to perform delete operation */



router.get('/delete/:id', BudgetController.performDelete);
module.exports = router;
