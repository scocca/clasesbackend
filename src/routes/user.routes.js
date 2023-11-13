//si trabajamos con muchas rutas este archivo podria pasar a llamarse
//index

const router = require('express').Router();

// crear usuario
router.post('/create', (req, res)=>res.send("ruta para crear un usuario"));

//login
router.post('login', (req, res)=>res.send('user login'))

//obtener usuario por id

//obtener listado de todos los usuarios


module.exports=router;