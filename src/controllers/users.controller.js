
const userServices = require("../services/user.services");

const getAllUsers = async (req, res) =>{
   try {
    const result = await userServices.getAll();
    res.status(200).json(result);
   } catch (error) {
    res.status(400).json(error.message);
   }
};
 
const getUserById = async (req, res) =>{
   try {
    const { id } = req.params;
    const result = await userServices.getById(id);
    res.status(200).json(result)
   } catch (error) {
    res.status(400).json(error.message)
   }
};

const getUserWithTasks = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await userServices.getWithTasks(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUsersCategories = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await userServices.userCategories(id);
        res.json(result)
    } catch (error) {
        res.status(400).json({
            error : error.message,
            details: error.stack
        });
    }
}
const createUser = async (req, res) =>{
   try {
    const newUser = req.body;
    const result = await userServices.create(newUser);
    res.status(200).json(result)
   } catch (error) {
    res.status(400).json(error.message);
   }
};

const updateUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await userServices.update(id, field);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const result = await userServices.destroy(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserWithTasks,
    getUsersCategories

}