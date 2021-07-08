const express = require('express');
const router = express.Router();

const {
  allExpenses,
  createExpenses,
  editExpenses,
  deleteExpenses,
  deleteAllExpenses,
  // ExpensesSum
} = require('../controllers/task.controller');

router.get('/allExpenses', allExpenses);
// router.get('/ExpensesSum', ExpensesSum);
router.post('/createExpenses', createExpenses);
router.patch('/editExpenses', editExpenses);
router.delete('/deleteExpenses', deleteExpenses);
router.delete('/deleteAllExpenses', deleteAllExpenses);

module.exports = router;