const express = require('express');
const Todo = require('../models/Todo');
const passport = require('passport');
const router = express.Router();

// Ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google');
}

// Create a new todo
router.post('/', ensureAuthenticated, async (req, res) => {
  try {
    const todo = new Todo({
      userId: req.user.id,
      title: req.body.title,
      completed: false,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all todos for the user
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update todo completion status
router.put('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    todo.completed = req.body.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a todo
router.delete('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    await todo.remove();
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
