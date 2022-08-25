/** 
 * Archivo de ejemplo para una BD local 
*/
const { nanoid } = require('nanoid')
const users = [
    { 
        id: nanoid(),
        name: 'Oscar',
        email: 'hola@hola.cl'
    }
]

module.exports = users