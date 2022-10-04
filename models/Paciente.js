const {Schema, model} = require('mongoose');
//modelo pacientes
const Paciente = new Schema({
    nombre: String,
    rut: String,
    rutSostenedor: String,
    desc: String, //aqui se define la etapa en la que esta el paciente (1ra, 2da o 3ra)
});

module.exports = model('pacientes', Paciente);