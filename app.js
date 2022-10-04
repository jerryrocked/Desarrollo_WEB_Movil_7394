const express = require('express');
const app = express();
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./typedefs');
const {resolvers} = require('./resolvers');
const {connectDB} = require('./db');
module.exports = app;
connectDB();
async function start(){
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.listen(3000, () => {
        console.log("Servidor en puerto 3000");
    })
}
start();