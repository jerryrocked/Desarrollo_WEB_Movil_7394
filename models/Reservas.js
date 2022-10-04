const {Schema, model} = require('mongoose');
//modelo de reserva de horas
const Reservas = new Schema({
    fecha: String,
    hora: String,
    rutSostenedor: String,
    rutPaciente: String,
    rutProfesional: String,
    codSede: String,
    numBox: String,
});

module.exports = model('reservas', Reservas);