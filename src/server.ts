import express from 'express';
import {ApolloServer} from "apollo-server-express";
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
});

const app = express();
server.applyMiddleware({app});

// const config = require("./config.json");
// for (let key in config) {
//     process.env[key] = config[key];
// }

app.listen(3000, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);