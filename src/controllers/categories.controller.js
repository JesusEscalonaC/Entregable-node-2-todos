const categoriesServices = require("../services/categories.services");

const getAllCategories = async(req, res)=>{
        try {
            const {id} = req.params;
            const result = await categoriesServices.getAll(id);
            res.json(result);
        } catch (error) {
            res.status(400).json({
                error : error.message,
                details: error.stack
            });
        }
}

module.exports = {getAllCategories}