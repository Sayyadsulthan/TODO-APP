const express = require('express');

const router = express.Router();
// const db= require('../model/mongoose');

const homePage= require('../controllers/home_controller');
// const todoController = require('../controllers/todo_controller');
router.get('/', homePage.home);
// router.post('/create-todo', todoController.todo);
router.post('/create-todo', homePage.todo);
router.all('/delete_task', homePage.deleteTodo);

module.exports = router;

