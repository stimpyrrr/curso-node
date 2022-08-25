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

module.exports = UserRouter