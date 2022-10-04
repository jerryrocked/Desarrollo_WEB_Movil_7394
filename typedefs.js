const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Medics{
        id: ID!
        tipo: String!
        nombre: String
        rut: String!
        email: String
        cell: String
        pass: String!
    }

    type Admins{
        id: ID!
        deIns: Boolean!
        nombre: String
        rut: String!
        email: String
        cell: String
        sede: String
        pass: String!
    }

    type Nurses{
        id: ID!
        rut: String!
        nombre: String!
        email: String
        pass: String!
    }

    type JAuxs{
        id: ID!
        nombre: String!
        rut: String!
        email: String
        pass: String!
    }

    type SPacientes{
        id: ID!
        nombre: String!
        rut: String!
        rutPaciente: String
        seguro: String
    }

    type Pacientes{
        id: ID!
        nombre: String!
        rut: String!
        rutSostenedor: String
        desc: String
    }

    type Sedes{
        id: ID!
        nombre: String
        ciudad: String
        comuna: String
        email: String
        codigo: String
    }

    type Boxs{
        id: ID!
        size: String
        nro: String
        codSede: String
        tipoBox: String
    }

    type Reservas{
        fecha: String
        hora: String
        rutSostenedor: String
        rutPaciente: String
        rutProfesional: String
        codSede: String
        numBox: String
    }

    type Query{
        hello: String
        getAllMedics: [Medics]
        getAllAdmins: [Admins]
        getAllNurses: [Nurses]
        getAllAuxs: [JAuxs]
        getAllSPacientes: [SPacientes]
        getAllPacientes: [Pacientes]
        getAllSedes: [Sedes]
        getAllBoxs: [Boxs]
        getAllReservas: [Reservas]
        getMedics(rut: String): Medics
        getAdmins(rut: String): Admins
        getNurses(rut: String): Nurses
        getAux(rut: String): JAuxs
        getSPaciente(rut: String): SPacientes
        getPaciente(rut: String): Pacientes
        getSede(codigo: String): Sedes
        getBox(codSede: String, numBox: String): Boxs
        getReserva(rutPaciente: String): Reservas
    }

    type Mutation{
        crearMed(tipo: String, nombre: String, rut: String, email: String, cell: String, pass: String): Medics
        crearAdmin(deIns: Boolean, nombre: String, rut: String, email: String, cell: String, pass: String): Admins
        crearNurse(rut: String, nombre: String, email: String, pass: String): Nurses
        crearAuxiliar(nombre: String, rut: String, email: String, pass: String): JAuxs
        crearSostenedor(nombre: String, rut: String, rutPaciente: String, seguro: String): SPacientes
        crearPaciente(nombre: String, rut: String, rutSostenedor: String, desc: String): Pacientes
        crearSede(nombre: String, ciudad: String, comuna: String, email: String, codigo: String): Sedes
        crearBox(size: String, nro: String, codSede: String, tipoBox: String): Boxs
        crearReserva(fecha: String, hora: String, rutSostenedor: String, rutPaciente: String, rutProfesional: String, codSede: String, numBox: String): Reservas
        deleteMed(rut: String): String
        deleteAdmin(rut: String): String
        deleteNurse(rut: String): String
        deleteAux(rut: String): String
        deleteSos(rut: String): String
        deletePac(rut: String): String
        deleteSede(codSede: String): String
        deleteBox(codSede: String, numBox: String): String
        deleteReserva(rutSostenedor: String): String
    }
`
module.exports = {typeDefs};