let mongoose = require('mongoose');


// create a book model

let moneyflowModel = mongoose.Schema({
        date: String,
        type: String,
        reason: String,
        amount: Number
    },
    {
        collection: "moneyflow"
    }
);
module.exports = mongoose.model('Budget', moneyflowModel);
