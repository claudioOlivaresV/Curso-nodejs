const express = require('express')
const app = express();
const server = require('http').Server(app)

//agregar body parse npm i body-parser
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')

// instalar rutas
// const router = require('./components/message/network')
const router = require('./network/routes')

db()


//user body parse 
app.use(bodyParser.json())
//añadimos router
// app.use(router)
router(app)


socket.connect(server)


// app.use('/', function(req, res) {
//     res.send('hola');
// });


app.use('/app', express.static('public'))
server.listen(3000, () =>{
    console.log('Servidor escuchando en el puerto 3000 mil')

});