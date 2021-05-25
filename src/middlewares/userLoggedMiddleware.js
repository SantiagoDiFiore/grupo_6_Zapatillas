//midleware de aplicacion global para mostrar algo en barra de navegacion o no, dependiendo si tengo a alguien en session o no.
//TAMBIEN LO USAREMOS PARA GUARDAR LAS COOKIES y PASAR AL USUARIO A SESION

const db = require('../database/models');
const Users = db.User;
const { Op } = require("sequelize");


const userLoggedMiddleware = async function(req, res, next){
res.locals.isLogged = false;//seteamos una variable que se puede acceder desde cualquier vista, por defecto en false

//guardamos en una variable el mail de la cookie seteada previamente
let emailInCookie = req.cookies.userEmail;

//usamos el metodo del modelo para buscar al usuario que coincide con el de la cookie
//let userFromCookie= User.findByField("email" , emailInCookie);
let userFromCookie = await Users.findOne({where:{
   email: {[Op.like] : emailInCookie}
}});

//si encomtramos al usuario lo pasamos como valor del usuario logueado
if(userFromCookie){
   req.session.userLogged=userFromCookie
}

if(req.session.userLogged){//si hay usuario logueado lo pasamos a true
res.locals.isLogged = true;
res.locals.userLogged = req.session.userLogged;//pasamos como variable local el usuario logueado en session para que este disponible en donde queramos usarlo

}

next();
}

module.exports = userLoggedMiddleware;