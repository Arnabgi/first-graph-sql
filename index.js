const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolver');
const port = 2001;
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(r => {
    server.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`Server is running ${port}`);
    })
}).catch(err => console.log(err));
