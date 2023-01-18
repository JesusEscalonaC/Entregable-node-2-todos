const Todos = require('../models/todos.model');
const TodoCategories = require('../models/todos-categories.model');
const Categories = require('../models/categories.model');

class todoServices {
    static async getAll(){
        try {
            const result = await Todos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id){
        try {
            const result = await Todos.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async create(task){
        try {
           const result = await Todos.create(task); 
           return result;
        } catch (error) {
            throw error;
        }
    }
    static async update(id, field){
        try {
            const result = await Todos.update(field, {
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async destroy(id){
        try {
            const result = await Todos.destroy({
                where: {id}
            });
            return result; 
        } catch (error) {
            throw error;
        }
    }
    static async getWithCategories(id){
        try {
            const result = Todos.findOne({
                where: {id},
                include :{
                    model: TodoCategories,
                    as: "categories",
                    attributes: ["id"],
                    include: {
                        model: Categories,
                        as: "category"

                    }
                }
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = todoServices;