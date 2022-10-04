const {Schema, model} = require('mongoose');
//Modelo de usuarios/as enfermeros/as
const Nurses = new Schema({
    rut: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    email: String,
    pass: {
        type: String,
        required: true,
    },
});

module.exports = model("Nurses", Nurses);