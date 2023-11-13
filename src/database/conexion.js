const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        await mongoose.connect("mongodb://172.21.32.1:27017/registrousuarios");
        console.log("base de datos conectada");
    }catch(error){
        console.log(error);
        throw new Error("Error al inicializar la base de datos");
    };
}

module.exports={dbConnection};