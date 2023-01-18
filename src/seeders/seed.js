const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const TodosCategories = require('../models/todos-categories.model');
const Categories = require('../models/categories.model');

const users = [
    {username: 'jesus', email: 'jesus@gmail.com', password: '1234'},
    {username: 'daniel', email: 'daniel@gmail.com', password: '1234'},
    {username: 'escalona', email: 'escalona@gmail.com', password: '1234'}
];

const todos = [
    {title: 'estudiar node', description: 'description para tarea 1', userId: 1},
    {title: 'pasear al perro', description: 'description para tarea 2', userId: 1},
    {title: 'lavar los platos', description: 'description para tarea 2', userId: 2},
    {title: 'ir al chequeo mensual', description: 'description', userId: 3}
];

const categories = [
    {name: 'personal', user_id: 1},
    {name: 'educacion', user_id: 1},
    {name: 'salud', user_id: 1},
    {name: 'trabajo', user_id: 2},
    {name: 'hogar', user_id: 2},
    {name: 'cocina', user_id: 2},
    {name: 'deporte', user_id: 2},
    {name: 'ocio', user_id: 3},
    {name: 'financiero', user_id: 3},
    {name: 'entretenimiento', user_id: 3},
  ];
  
  const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
  ];
  
// 
db.sync({force: true})
    .then(()=>{
        console.log("iniciando con el sembradio malicioso");
        users.forEach((user) => Users.create(user))
    
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
        categories.forEach((category)=>Categories.create(category)) 
    }, 200);
    setTimeout(() => {
        todosCategories.forEach((todoCat)=>TodosCategories.create(todoCat)) 
    }, 300)
})
    .catch((error)=>console.log(error));

  