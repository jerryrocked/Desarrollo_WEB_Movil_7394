const Medics = require('./models/Medics');
const Admins = require('./models/Admins');
const Nurses = require('./models/Nurses');
const JAuxs = require('./models/JAuxiliar');
const SPacientes = require('./models/SosPaciente');
const Pacientes = require('./models/Paciente');
const Sedes = require('./models/Sedes');
const Boxs = require('./models/Boxs');
const Reservas = require('./models/Reservas');
const resolvers = {
    Query: {
        hello: () => 'Usuario no encontrado',
        getAllMedics: async () => {
            const meds = await Medics.find();
            return meds;
        },
        getMedics: async (_, {rut}) => {
            const meds = await Medics.find();
            let fmed = null;
            for(let med of meds){
                if (rut == med.rut){
                    fmed = med;
                }
            }
            if(fmed != null){
                return fmed;
            }
            
        },
        getAllAdmins: async () => {
            const admns = await Admins.find();
            return admns;
        },
        getAdmins: async (_, {rut}) => {
            const admns = await Admins.find();
            for(let admn of admns){
                if(admn.rut == rut){
                    return admn
                }
                else{
                    return {
                        message: "Usuario no encontrado",
                    };
                }
            }
        },
        getAllNurses: async () => {
            const nurses = await Nurses.find();
            return nurses;
        },
        getNurses: async (_, {rut}) => {
            const nurses = await Nurses.find();
            for(let nurse of nurses){
                if(nurse.rut == rut){
                    return nurse;
                }
                else{
                    return {
                        message: "Usuario no encontrado",
                    };
                }
            }
        },
        getAllAuxs: async () => {
            const auxs = await JAuxs.find();
            return auxs;
        },
        getAux: async (_, {rut}) => {
            const auxs = await JAuxs.find();
            for(let aux of auxs){
                if(aux.rut == rut){
                    return aux;
                }
            }
        },
        getAllSPacientes: async () => {
            const spacients = await SPacientes.find();
            return spacients;
        },
        getSPaciente: async (_, {rut}) => {
            const spacients = await SPacientes.find();
            for(let spacient of spacients){
                if(spacient.rut == rut){
                    return spacient;
                }
            }
        },
        getAllPacientes: async () => {
            const pacients = await Pacientes.find();
            return pacients;
        },
        getPaciente: async (_, {rut}) => {
            const pacients = await Pacientes.find();
            for(let pacient of pacients){
                if(pacient.rut == rut){
                    return pacient;
                }
            }
        },
        getAllSedes: async () => {
            const sedes = await Sedes.find();
            return sedes;
        },
        getSede: async (_, {codigo}) => {
            const sedes = await Sedes.find();
            for(let sede of sedes){
                if(sede.codigo == codigo){
                    return sede;
                }
            }
        },
        getAllBoxs: async () => {
            const boxs = await Boxs.find();
            return boxs;
        },
        getBox: async (_, {codSede, numBox}) => {
            const boxs = await Boxs.find();
            for(let box of boxs){
                if(box.codSede == codSede && box.nro == numBox){
                    return box;
                }
            }
        },
        getAllReservas: async () => {
            const reservs = await Reservas.find();
            return reservs;
        },
        getReserva: async (_, {rutPaciente}) => {
            const reservs = await Reservas.find();
            for(let reserva of reservs){
                if(reserva.rutPaciente == rutPaciente){
                    return reserva;
                }
            }
        },
    },

    Mutation: {
        crearMed: async (_, args) => {
            const {tipo, nombre, rut, email, cell, pass} = args;
            const nuevoMed = new Medics({tipo, nombre, rut, email, cell, pass});
            await nuevoMed.save();
            return nuevoMed;
        },
        crearAdmin: async (_, args) => {
            const {deIns, nombre, rut, email, cell, sede, pass} = args;
            const nuevoAdmin = new Admins({deIns, nombre, rut, email, cell, sede, pass});
            await nuevoAdmin.save();
            return nuevoAdmin;
        },
        crearNurse: async (_, args) => {
            const {rut, nombre, email, pass} = args;
            const nuevoNurse = new Nurses({rut, nombre, email, pass});
            await nuevoNurse.save();
            return nuevoNurse;
        },
        crearAuxiliar: async (_, args) => {
            const {nombre, rut, email, pass} = args;
            const nAux = new JAuxs({nombre, rut, email, pass});
            await nAux.save();
            return nAux;
        },
        crearSostenedor: async (_, args) => {
            const {nombre, rut, rutPaciente, seguro} = args;
            const nSos = new SPacientes({nombre, rut, rutPaciente, seguro});
            await nSos.save();
            return nSos;
        },
        crearPaciente: async (_, args) => {
            const {nombre, rut, rutSostenedor, desc} = args;
            const nPac = new Pacientes({nombre, rut, rutSostenedor, desc});
            await nPac.save();
            return nPac;
        },
        crearSede: async (_, args) => {
            const {nombre, ciudad, comuna, email, codigo} = args;
            const nSede = new Sedes({nombre, ciudad, comuna, email, codigo});
            await nSede.save();
            return nSede;
        },
        crearBox: async (_, args) => {
            const {size, nro, codSede, tipoBox} = args;
            const nBox = new Boxs({size, nro, codSede, tipoBox});
            await nBox.save();
            return nBox;
        },
        crearReserva: async (_, args) => {
            const {fecha, hora, rutSostenedor, rutPaciente, rutProfesional, codSede, numBox} = args;
            const nReserva = new Reservas({fecha, hora, rutSostenedor, rutPaciente, rutProfesional, codSede, numBox});
            await nReserva.save();
        },
        deleteMed: async (_, args) => {
            const meds = await Medics.find();
            let dMed = null;
            for(let med of meds){
                if(med.rut == args.rut){
                    dMed = med;
                }
            }
            await dMed.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deleteAdmin: async (_, args) => {
            const admns = await Admins.find();
            let dAdmn = null;
            for(let admn of admns){
                if(admn.rut == args.rut){
                    dAdmn = admn;
                }
            }
            await dAdmn.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deleteNurse: async (_, args) => {
            const nurses = await Nurses.find();
            let dNurs = null;
            for(let nurse of nurses){
                if(nurse.rut == args.rut){
                    dNurs = nurse;
                }
            }
            await dNurs.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deleteAux: async (_, args) => {
            const auxs = await JAuxs.find();
            let dAux = null;
            for(let aux of auxs){
                if(aux.rut == args.rut){
                    dAux = aux;
                }
            }
            await dAux.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deleteSos: async (_, args) => {
            const soss = await SPacientes.find();
            let dSos = null;
            for(let sos of soss){
                if(sos.rut == args.rut){
                    dSos = sos;
                }
            }
            await dSos.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deletePac: async (_, args) => {
            const pacs = await Pacientes.find();
            let dPac = null;
            for(let pac in pacs){
                if(pac.rut == args.rut){
                    dPac = pac;
                }
            }
            await dPac.delete();
            return `Usuario de rut ${args.rut} eliminado de base de datos.`;
        },
        deleteSede: async(_, args) => {
            const sedes = await Sedes.find();
            let dSede = null;
            for(let sede of sedes){
                if(sede.codigo == args.codigo){
                    dSede = sede;
                }
            }
            await dSede.delete();
            return `Sede ${args.codigo} eliminada`;
        },
        deleteBox: async (_, args) => {
            const boxs = await Boxs.find();
            let dBox = null;
            for(let box of boxs){
                if(box.codSede == args.codSede && box.nro == args.numBox){
                    dBox = box;
                }
            }
            await dBox.delete();
            return `Box numero ${args.numBox} de la sede ${args.codSede} eliminado`;
        },
        deleteReserva: async (_, args) => {
            const reservs = await Reservas.find();
            let dReserva = null;
            for(let reserva of reservs){
                if(reserva.rutSostenedor == args.rutSostenedor){
                    dReserva = reserva;
                }
            }
            await dReserva.delete();
            return `Reserva eliminada, hora nuevamente disponible`;
        }
    },
}

module.exports = {resolvers};