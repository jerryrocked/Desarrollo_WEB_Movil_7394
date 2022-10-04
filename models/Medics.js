const {Schema, model} = require('mongoose');
//Modelo de usuarios medicos/as
const Medics = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    nombre: String,
    rut: {
        type: String,
        required: true,
    },
    email: String,
    cell: String,
    pass: {
        type: String,
        required: true,
    },
});

module.exports = model("Medics", Medics);