const usersController = {
    login: (req,res)=>{
        res.render("./users/login",{titulo:"Ingresá"})
    },
    register: (req,res)=>{
        res.render("./users/register",{titulo:"Registrate"})
    },
   
}  

module.exports = usersController