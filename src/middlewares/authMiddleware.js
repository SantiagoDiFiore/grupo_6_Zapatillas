//middleware, si el usuario NO esta logueado lo redirige al login, no le permite acceder al perfil
const authMiddleware = function(req , res , next){
if(!req.session.userLogged){//preguntamos si no hay usuario logueado
return res.redirect("/users/login")
}
return next();
}

module.exports = authMiddleware;