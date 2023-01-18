const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');
const CategoriesRouter = require('./routes/categories.routes');
const cors = require('cors');
const authRoute = require('./routes/auth.routes')
require("dotenv").config();
// console.log(process.env.USERNAME);
const app = express();

app.use(express.json());
const PORT = process.env.PORT;

app.use(cors());

db.authenticate()
.then(()=>console.log("autenticacion exitosa"))
.catch((error)=>console.log(error));

initModels();
db.sync({force: false})
.then(() => console.log('base de datos sincronizada'))
.catch((error)=>console.log(error));

app.get('/', (req, res)=>{
    res.status(200).json({message: 'bienvenido al servidor'})
});

app.use('/api/v1', userRoutes);



app.use('/api/v1', CategoriesRouter);

app.get('/users', async (req, res)=>{
 try {
    const result = await Users.findAll();
    res.status(200).json(result);
 } catch (error) {
    console.log(error)
 }
})

app.get("/users/:id", async (req, res) => {
    try {
      
      const { id } = req.params;
      const result = await Users.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/users/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });
  
  app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params; // { id: 2 }
      const field = req.body;
      const result = await Users.update(field, {
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  //TODOS AREA-----------------------------//

  app.use('/api/v1', todoRoutes);

  app.get('/tasks', async(req, res)=>{
    try {
        const result = await Todos.findAll();
        res.status(200).json(result);
     } catch (error) {
        console.log(error)
     }
  });

  app.get("/tasks/:id", async (req, res) => {
    try {
      
      const { id } = req.params;
      const result = await Todos.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/tasks/title/:title", async (req, res) => {
    try {
      const { title } = req.params;
      const result = await Todos.findOne({ where: { title } }); 
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/tasks", async (req, res) => {
    try {
      const todo = req.body;
      const result = await Todos.create(todo);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.put("/tasks/:id", async (req, res) => {
    try {
      const { id } = req.params; 
      const field = req.body;
      const result = await Todos.update(field, {
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  app.use('/api/v1', authRoute);
  
  app.delete("/tasks/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todos.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
})