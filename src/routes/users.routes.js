const { Router } = require('express');
const {
     getAllUsers,
     getUserById,
     createUser,
     updateUser,
     deleteUser,
     getUserWithTasks,
     getUsersCategories} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middlewares');
     
const router = Router();

router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id/tasks", authMiddleware, getUserWithTasks);

router.get("/users/:id", authMiddleware, getUserById);

router.get("/users/:id/categories", authMiddleware, getUsersCategories);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;