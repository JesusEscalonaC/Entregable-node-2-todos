const todoServices = require('../services/todo.services');

const getAllTodos = async(req, res) =>{
    try {
        const result = await todoServices.getAll();
        res.status(200).json(result);
       } catch (error) {
        res.status(400).json(error.message);
       }
}

const getTodoById = async(req, res) =>{
    try {
        const { id } = req.params;
        const result = await todoServices.getById(id);
        res.status(200).json(result)
       } catch (error) {
        res.status(400).json(error.message)
       }
}

const createTodo = async(req, res) =>{
    try {
        const newTask = req.body;
        const result = await todoServices.create(newTask);
        res.status(200).json(result)
       } catch (error) {
        res.status(400).json(error.message);
       }
}
const updateTodo = async(req, res) =>{
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await todoServices.update(id, field);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const deleteTodo = async(req, res) =>{
    try {
        const {id} = req.params;
        const result = await todoServices.destroy(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getTodosWithCategories = async(req, res) =>{
    try {
        const {id} = req.params;
        const result = await todoServices.getWithCategories(id);
        res.json({
            message: 'creando tareas con categorias',
            data: result
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodosWithCategories
}