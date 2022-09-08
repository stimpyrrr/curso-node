// Nos permitirá crear un conjunto de rutas que estén relacionada a una entidad.
const { Router } = require('express')
const { nanoid } = require('nanoid')

const users = require('./../data/user')
const response = require('./response')

// Cómo nombre de variable también podría ser UserController
const UserRouter = Router()

UserRouter.route('/user')
.get((req, res, next) => {
    response({ error: false, message: users, res, status: 200})
    /* res.send({
        message: users,
        error: false
    }) */
})
.post((req, res) => {
    const { body: { name, email }} = req

    users.push({
        id: nanoid(),
        name,
        email
    })
    response({ error: false, message: users, res, status: 201})
    /* res.status(201).send({
        message: users,
        error: false
    }) */
})
//TODO: posible titulo incompleto de commit "enrutadores" pero no está terminada la sección aún
UserRouter.route('/user/:id')
.delete((req, res) => {
    const { params: { id } } = req
    /**
     * Predicado es una función que devuelve un booleano
     * Boolean(users.find(user => user.id === id)) wrappear para castear en booleano
     */
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1)
        return response({  
            message: `User with id: ${id} was not found`,
            res,
            status: 404
        })
    

    users.splice(userIndex, 1)
    response({ error: false, message: users, res, status: 200})
})
.patch((req, res) => {
    const { 
        body: { name, email}, 
        params: { id } 
    } = req
    /**
     * Predicado es una función que devuelve un booleano
     * Boolean(users.find(user => user.id === id)) wrappear para castear en booleano
     */
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1)
        return response({  
            message: `User with id: ${id} was not found`,
            res,
            status: 404
        })
    

    users.splice(userIndex, 1, {
        ...users[userIndex],
        ...(name && { name }),
        ...(email && { email })
    })
    response({ error: false, message: users, res, status: 200})
})
module.exports = UserRouter