const Todos = require('../models/todos.model');
const Users = require('../models/users.model');
const Categories = require('../models/categories.model');

class userServices {
    static async getAll(){
        try {
           const result = await Users.findAll();
           return result 
        } catch (error) {
            throw error;
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getWithTasks(id) {
        try {
          const result = await Users.findOne({
            where: { id },
            include: {
              model: Todos,
              as: "task",
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
    static async userCategories(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                include: {
                    model: Categories,
                    as: "categories"
                }
            });
            return result;
        } catch (error) {
          throw error;
        }
    }
    static async create(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, field){
        try {
            const result = await Users.update(field, {
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async destroy(id){
        try {
            const result = await Users.destroy({
                where: {id}
            });
            return result; 
        } catch (error) {
            throw error;
        }
    }
}



module.exports = userServices;