const http = require('http')
const port = 5000 

const server = http.createServer((req, res) => {
    res.end('Hola Alumnos')
})

server.listen(port, () => {
    console.log('Arranca el servidor')
})