
const express =  require('express')
const controller = require('./controller')
const router = express.Router();

router.post('/', (req, res)=> {
    console.log(req.body.name);

    controller.addUser(req.body.name)
    .then(() =>{
        res.status(201).send({ error: '', body: 'creado correctamente'})
    })
    .catch((e => {
        res.status(400).send({ error: 'error en parametros', body: ''})
    }));
})

router.get('/', (req, res)=> {
    controller.listUsers(req.body.name)
    .then((users) =>{
        res.status(200).send({ error: '', body: users})
    })
    .catch((e => {
        res.status(500).send({ error: 'error en parametros', body: ''})
    }));
})




module.exports = router;
