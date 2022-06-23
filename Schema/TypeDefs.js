const {gql} = require('apollo-server-express');
const typeDefs = gql`
type User{
    id   : Int
    name : String
    age  : Int
    married : Boolean
},

#Queries
type Query{
    value : String,
    getAllUsers : [User]
},

#add user
type Mutation{
    addUser(
        id   : Int,
        name : String!,
        age  : Int!,
        married : Boolean!
    ): User,

    deleteUser(
        id : Int!
    ): Boolean
}
`;
module.exports = {typeDefs};