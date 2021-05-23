//middleware, si el usuario esta logueado no permite acceder al registro ni al login
const guestMiddleware = function(req , res , next){
if(req.session.userLogged){//preguntamos si tenenmos a alguien logueado en la sesion
return res.redirect("/users/profile")
}
return next();
}

module.exports = guestMiddleware;