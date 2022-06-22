const {users} = require('../Data');
const resolvers = {
    Query : {
        getAllUsers(){
            return users;
        },
    },
};
module.exports = {resolvers};