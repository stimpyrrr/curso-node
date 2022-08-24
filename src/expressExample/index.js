const express = require('express')
const morgan = require('morgan')

const { userRouter } = require('./routes')

// Express es un método que me devuelve un tipo de dato Express
const app = express()
const PORT = process.env.PORT

app.use(express.json())/** retorna un middleware que parsea a los JSON en todos los request en
donde Content-Type (Header) contenga application/json */

app.use(morgan('dev'))// Morgan es un middleware de terceros.
app.use(userRouter)// le digo a express que utilice este middleware o conjunto de ellos

const fooMiddleware = (req, res, next) => {// Middleware estamos inyectando la variable foo
    req.foo = 'bar'
    next()// Necesario para que el middleware funcione  
}

// app.use(fooMiddleware)// Uso de middleware de manera global

// Definifr middlewares/rutas
app.get('/', 
fooMiddleware,// Uso de middleware de manera local
(req, res) => {
    console.log('req.foo', req.foo)
    res.send({
        message: 'Hola mundo desde Express!',
        method: 'GET',
        foo: req.foo
    })
})

app.post('/', 
(req, res) => {
    console.log('req.foo', req.foo)
    res.send({
        message: 'Hola mundo desde Express!',
        method: 'POST',
        foo: req.foo
    })
})

app.listen(PORT, () => {
    console.log(`Server runnin at port ${PORT}`)
})