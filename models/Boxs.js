const {Schema, model} = require('mongoose');
//modelo de boxs
const Boxs = new Schema({
    size: String,
    nro: String,
    codSede: String,
    tipoBox: String,
});

module.exports = model('boxs', Boxs);