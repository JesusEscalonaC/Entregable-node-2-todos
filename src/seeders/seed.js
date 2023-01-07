const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');

const users = [
    {username: 'jesus', email: 'jesus@gmail.com', password: '1234'},
    {username: 'daniel', email: 'daniel@gmail.com', password: '1234'},
    {username: 'escalona', email: 'escalona@gmail.com', password: '1234'}
];

const todos = [
    {title: 'tarea1', description: 'description para tarea 1', userId: 1},
    {title: 'tarea2', description: 'description para tarea 2', userId: 2},
    {title: 'tarea3', description: 'description para tarea 2', userId: 3}
];

// 
db.sync({force: true})
    .then(()=>{
        console.log("iniciando con el sembradio malicioso");
        users.forEach((user) => Users.create(user))
    
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    })
    .catch((error)=>console.log(error));