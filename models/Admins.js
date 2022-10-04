const {Schema, model} = require('mongoose');
//Modelo de usuarios/as administradores/as
const Admin = new Schema({
    deIns: {
        type: Boolean,
        required: true,
    }, //si es true, es admin de institucion, si no, solo admin del centro.
    nombre: String,
    rut: {
        type: String,
        required: true,
    },
    email: String,
    cell: String,
    sede: String,
    pass: {
        type: String,
        required: true,
    }
});

module.exports = model("Admins", Admin);