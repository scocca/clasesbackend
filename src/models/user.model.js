const mongoose = require('mongoose');

const {Schema}=mongoose;
//Creacion del esquema
const userSchema = new Schema ({
    name: String,
    lastName: String,
    email: String,
    password: String,
    status: {
        type:String,
        enum:['active','inactive'],
        require: true,
        default:'active'
    }
});
//creacion del modelo
const User = mongoose.model('User', userSchema);

modelu.exports = User;