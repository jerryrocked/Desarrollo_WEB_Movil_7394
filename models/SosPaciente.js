const {Schema, model} = require('mongoose');
//Modelo de sostenedores de pacientes
const SPaciente = new Schema({
    nombre: String,
    rut: String,
    rutPaciente: String,
    seguro: String,
});

module.exports = model('spacientes', SPaciente);