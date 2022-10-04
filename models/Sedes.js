const {Schema, model} = require('mongoose');
//Modelo de sedes de la institucion
const Sedes = new Schema({
    nombre: String,
    ciudad: String,
    comuna: String,
    email: String,
    codigo: String, //Esta variable vendria a ser basicamente una Foreign Key
});

module.exports = model('sedes', Sedes);