import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Person {
    name: String!
    age: Int!
  }
  type Query {
    hello: String
    owner: Person
  }
`;