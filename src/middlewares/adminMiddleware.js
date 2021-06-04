//middleware, si el usuario no esta logueado y no es admin, no puede crear productos.
const adminMiddleware =  function(req , res , next){
    let userLogged = req.session.userLogged
    if(!req.session.userLogged){
    return res.redirect("/products")
 }else if(userLogged && userLogged.isAdmin == 0){
    return res.redirect("/products")
 }
    return next();
}
    
module.exports = adminMiddleware;