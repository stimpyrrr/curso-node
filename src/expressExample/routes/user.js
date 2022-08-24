// Nos permitirá crear un conjunto de rutas que estén relacionada a una entidad.
const { Router } = require('express')

const users = require('./../data/user')

// Cómo nombre de variable también podría ser UserController
const UserRouter = Router()

UserRouter.route('/user')
.get((req, res, next) => {
    res.send({
        message: users,
        error: false
    })
})
.post((req, res) => {
    const { body: { name, email }} = req

    users.push({
        id: `${Date.now()}`,
        name,
        email
    })

    res.status(201).send({
        message: users,
        error: false
    })
})

module.exports = UserRouter