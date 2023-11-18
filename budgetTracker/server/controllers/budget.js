let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with budget model

let Budget = require('../models/budget');


module.exports.displayBudgetList = (req, res, next) => {
    Budget.find()
        .then(moneyflow => {
            res.render('budget/budget', {
                title: 'Budget',
                moneyflow: moneyflow
            });
        })
        .catch(err => {
            console.error(err);
        });
}
module.exports.displayAddPage = (req, res, next) => {
  res.render('budget/add', {title: 'Add Entry'});
}


module.exports.processAddPage = (req, res, next) => {
  let newBudget = Budget({
    "date": req.body.date,
    "type": req.body.type,
    "reason": req.body.reason,
    "amount": req.body.amount
  });
  Budget.create(newBudget)
    .then(createdBudget => {
      console.log('Budget created:', createdBudget);
      res.redirect('/budget');
    })
    .catch(err => {
      console.error(err);
      res.end(err);
    });
}


module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  
  // Using promises
  Budget.findById(id)
    .then(entryToEdit => {
      res.render('budget/edit', { title: 'Edit Entry', entry: entryToEdit });
    })
    .catch(err => {
      console.log(err);
      res.end(err);
    });
}
module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  let updateBudget = new Budget({
    "_id": id,
    "date": req.body.date,
    "type": req.body.type,
    "reason": req.body.reason,
    "amount": req.body.amount
  });
  Budget.updateOne({ _id: id }, updateBudget, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/budget');
    }
  });
}

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  // Using promises
  Budget.deleteOne({ _id: id })
    .then(() => {
      res.redirect('/budget');
    })
    .catch(err => {
      console.log(err);
      res.end(err);
    });
}
