const Task = require('../../db/models/task/index');

module.exports.allTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({data: result})
  });
};

module.exports.allExpenses = (req, res, next) => {
  testFunction = (arr) => {
    let sum = 0 ;
    arr.forEach(element => {
      let {_id, text, text2} = element;
      sum = sum + Number(text);
    });
    return sum;
  };
  Task.find().then(result => {
    res.send({sum:testFunction(result)});
  });
};

module.exports.createTasks = (req, res, next) => {
  const task = new Task(req.body);

  task.save().then(result1 => {
    Task.find().then(result => {
      res.send({data: result})
    });
  });
};

module.exports.editTasks = (req, res, next) => {
  Task.updateOne({
    text:req.body.text,
    text2:req.body.text2
  }).then(result => {
    Task.find().then(result => {
      res.send({data: result})
    });
  });
};

module.exports.deleteTasks = (req, res, next) => {
  Task.deleteOne({
    _id: req.query._id
  }).then(result => {
    Task.find().then(result => {
      res.send({data: result})
    });
  });
};  

module.exports.deleteAllTasks = (req, res, next) => {
  Task.deleteMany().then(result => {
    Task.find().then(result => {
      res.send({data: result})
    });
  });
};