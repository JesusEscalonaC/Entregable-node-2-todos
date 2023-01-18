const { Router } = require('express');

const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodosWithCategories
} = require('../controllers/todos.controller')
const authMiddleware = require('../middlewares/auth.middlewares');

const router = Router();

router.get("/tasks", authMiddleware,  getAllTodos);

router.get("/tasks/:id", authMiddleware, getTodoById);

router.get("/tasks/:id/categories", authMiddleware, getTodosWithCategories);

router.post("/tasks", authMiddleware, createTodo);

router.put("/tasks/:id", authMiddleware, updateTodo);

router.delete("/tasks/:id", authMiddleware, deleteTodo);

module.exports = router;