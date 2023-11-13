const express = require('express');
const morgan = require('morgan');
const router = require('../routes/user.routes')


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1", router);
// app.use("/api/v1", routerProductos); se podria poner esta linea para crear otro router que gestione las rutas para los productos
app.use('*', (req, res)=> res.status(404).send('nos hemos equivocado en algo, disculpe las molestias'));

module.exports = app;