const fs = require('fs');
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req,res)=>{
        res.render("./users/login",{titulo:"Ingresá"})
    },
    register: (req,res)=>{
        res.render("./users/register",{titulo:"Registrate"})
    },
   
}  

module.exports = usersController