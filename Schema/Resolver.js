const {users} = require('../data.js');
//console.log(users.length);
const fs = require('fs').promises;
const path = require('path');
const { response } = require('express');
let proper_path = path.join(__dirname,'../'+'/data.js');
const resolvers = {
    Query : {
        value : () => "Hello World",
        getAllUsers : () => users
        // getAllUsers(){
        //     return users;
        // },
    },

    Mutation : {
        addUser : (parent,args) =>{
            const {id,name,age,married} = args;
            const user_data = {
                id : users.length+1,
                name,
                age,
                married
            }
            if(Array.isArray(users)){
            users.push(user_data);
            let save_data = JSON.stringify(users);
            let val = 
            `let users = ${"\n"+save_data};${"\n"}module.exports = {users:users};`
            fs.writeFile(proper_path,val,'utf-8',()=>{});
            //fs.appendFile(proper_path,save_data,'utf-8',()=>{})
            return user_data;
            }
            else{
                return "No user found";
            }
            
        },

        deleteUser :(parent,args)=>{
          const index = users.findIndex(userId=> userId.id == args.id);
          let response = false;
          //console.log(index);
          if(index!= -1){
            users.splice(index,1);
            let delete_data = JSON.stringify(users);
            let val = 
            `let users = ${"\n"+delete_data};${"\n"}module.exports = {users:users};`
            fs.writeFile(proper_path,val,'utf-8',()=>{});
            response = true;
          }
          else{
            response = false;
          }
          return response;
        }
    }
};
module.exports = {resolvers};