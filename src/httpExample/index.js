const http = require('http')
const PORT = '3000'


/** Creamos un servidor
 * el método createServer puedo crear un servidor como yo quiera.
 * el método createServer va a recibir una callback con 2 parámetros.
 * el req.method me muestra el método con el cual se ha invocado la función.
 * el req.url muestra cual es la url desde que se está llamando mi servidor.
*/ 
const server = http.createServer((req, res) => {
        // Creación de Cabecera
        res.setHeader('Content-Type', 'application/json')
        // Tipo de respuesta
        res.writeHead(200)
        // Le digo a mi servidor que envie un JSON.stringify
        return res.end(
            JSON.stringify({
                message: `You have used ${req.method} method`,
                url: req.url
            })
        )
})

/** Listen para escuchar un puerto
 * Pasamos '() =>' o callback como segundo argumento del listen 
*/
server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})