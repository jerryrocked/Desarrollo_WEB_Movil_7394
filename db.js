const {connect} = require('mongoose');

const connectDB = async () => {
    try {
        await connect("mongodb+srv://Thomazoide:Thom1232!@mastercluster.hasjpif.mongodb.net/DataCenter", {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("BD conectada correctamente");
    } catch(error){
        console.log("Error al conectar con BD");
        console.error(error);
    }
};

module.exports = {connectDB};