const {Schema, model} = require('mongoose');
//modelo de jefes auxiliares
const Auxiliar = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    rut: {
        type: String,
        required: true,
    },
    email: String,
    pass: {
        type: String,
        required: true,
    },
});

module.exports = model("auxs", Auxiliar);