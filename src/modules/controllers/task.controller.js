const Expenses = require('../../db/models/task/index');

module.exports.allExpenses = (req, res, next) => {
  Expenses.find().then(result => {
    res.send({data: result})
  });
};

module.exports.createExpenses = (req, res, next) => {
  const expenses = new Expenses(req.body);
  
  if(typeof(expenses.Score) === 'string' && typeof(expenses.Cost) === 'number' && expenses.Score != "" && expenses.Cost != ""){
    expenses.save().then(result1 => {
      Expenses.find().then(result => {
        res.send({data: result})
      });
    });
  }else {
    Expenses.find().then(result => {
      res.send(console.log('error'))
    });
  }
};

module.exports.editExpenses = (req, res, next) => {
  Expenses.updateOne({_id: req.body._id}, req.body).then(result => {
    Expenses.find().then(result => {
      res.send({data: result})
    });
  });
};


module.exports.deleteExpenses = (req, res, next) => {
  Expenses.deleteOne({
    _id: req.query._id
  }).then(result => {
    Expenses.find().then(result => {
      res.send({data: result})
    });
  });
};  

module.exports.deleteAllExpenses = (req, res, next) => {
  Expenses.deleteMany().then(result => {
    res.send({data: result})
  });
};