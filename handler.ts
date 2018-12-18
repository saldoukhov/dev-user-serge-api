import {ApolloServer} from "apollo-server-lambda";
import {typeDefs} from "./src/schema";
import {resolvers} from "./src/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
});

export const handleRequest = server.createHandler();