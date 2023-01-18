const Categories = require('../models/categories.model');
const Users = require('../models/users.model');

class categoriesServices {
    static async getAll(id){
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
}

module.exports = categoriesServices;