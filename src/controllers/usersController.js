const path = require("path")

const usersController = {
    login: (req,res)=>{
        res.sendFile(path.resolve("./views/users/login.html"))
    },
    register: (req,res)=>{
        res.sendFile(path.resolve("./views/users/register.html"))
    }
   
}  

module.exports = usersController