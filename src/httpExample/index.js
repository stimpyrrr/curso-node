const http = require('http')
const PORT = '3000'


/** Creamos un servidor
 * el método createServer puedo crear un servidor como yo quiera.
 * el método createServer va a recibir una callback con 2 parámetros.
 * el req.method me muestra el método con el cual se ha invocado la función.
 * el req.url muestra cual es la url desde que se está llamando mi servidor.
*/ 
const server = http.createServer((req, res) => {
    console.log('method:', req.method)
    console.log('url:', req.url)

    if(req.method === 'GET') 
        res.write('You have used GET method')
    else if(req.method === 'GET') 
        res.write('You have used POST method')

    res.end()// termina la ejecución
})

/** Listen para escuchar un puerto
 * Pasamos '() =>' o callback como segundo argumento del listen 
*/
server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})