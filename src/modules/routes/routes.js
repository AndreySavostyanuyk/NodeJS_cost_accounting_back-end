const express = require('express');
const router = express.Router();

const {
  allTasks,
  createTasks,
  editTasks,
  deleteTasks,
  deleteAllTasks,
  allExpenses
} = require('../controllers/task.controller');

router.get('/allTasks', allTasks);
router.get('/allExpenses', allExpenses);
router.post('/createTasks', createTasks);
router.patch('/editTasks', editTasks);
router.delete('/deleteTasks', deleteTasks);
router.delete('/deleteAllTasks', deleteAllTasks);

module.exports = router;