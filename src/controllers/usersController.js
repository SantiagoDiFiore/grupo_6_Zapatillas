const{validationResult} =require("express-validator");
const bcrypt=require("bcryptjs");
const db = require('../database/models');
const Users = db.User;
const { Op } = require("sequelize");

const usersController = {
    login: (req,res)=>{
        res.render("./users/login",{titulo:"Ingresá"})
    },

    loginProcess: async function(req,res){
        //validamos que el email que llega por formulario, coincida con alguno de la db.(usando metodo del modelo)
        let userToLogin= await Users.findOne({where:{
            email: {[Op.like] : req.body.email}
       }});
         //si encotramos usuario por mail, validamos la contraseña que llega con la de la db mediante bcrypt
         if(userToLogin){
             let comparePassword= bcrypt.compareSync(req.body.password , userToLogin.password)
         //si la contraseña es validada, redirigimos al perfil guardando al usuario en sesion sin la contraseña
         if(comparePassword){
            delete userToLogin.password//solo borramos contraseña del objeto usuario que se esta logueando
            req.session.userLogged = userToLogin;//guardamos en sesion al usuario, para poder compartir la info en otras paaginas(lo usaremos en la vista profile para mostrar informacion por ej.)

            //Antes de redirigir al perfil , si se desea recordar usuario debemos setear cookie en navegador del usuario
            //con informacion del email (nombre, valor guardado y maxage)
            if(req.body.record){
                res.cookie("userEmail", req.body.email, {maxAge:5*60*1000})
                }
            //redirigimos al perfil de usuario           
            res.redirect("/users/profile")
         }else{//si no coincide la contraseña se renderiza la vista de login con error
            res.render("./users/login",{titulo:"Ingresá" ,old:req.body, errors:{
                email:{
                    msg:"Las credenciales no coinciden"
                }
            }  
        })}
        
        }else{//si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            res.render("./users/login",{titulo:"Ingresá" , errors:{
                email:{
                    msg:"El usuario no se encuentra en la base de datos"
                }
            }  
        })
        }
        
    },

    register: async function(req,res){
        const genders = await db.Gender.findAll()
        res.render("./users/register",{titulo:"Registrate", genders})
    },
    processRegister: async function(req,res){
       //el formulario debe pasar primero las validaciones
       const errors = validationResult(req);
       const genders = await db.Gender.findAll() 
       if (!errors.isEmpty()){
           res.render("./users/register" ,{titulo:"¡Hubo un error en la registracion!" , errors:errors.mapped() , old:req.body, genders})
       }
       //si pasa las validaciones primarias debe checkearse que el usuario NO exista en la db,chequeando por mail
       //si existe se debe mostrar un error, si no existe se puede continuar con el registro.
       let userInDb = await Users.findOne({where:{
            email: {[Op.like] : req.body.email}
       }})
       // recibe como parametros el campo a chequear en db y el campo que completa el usuario en form.
       
       //si el usuario existe volvemos a renderizar la vista del formulario y personalizamos un error para el campo mail
       if(userInDb){
        res.render("./users/register" ,{titulo:"Registrate" ,
            errors:{
                email:{
                    msg:"El usuario se encuentra registrado"
                }
            }, 
            old:req.body, genders})

       }else{
       //registrando al nuevo usuario (si su mail no esta registrado en db)
       let password= req.body.password;
       let passCryted= bcrypt.hashSync(password , 10);//hasheando password que llega

       let checkPassword= req.body.checkPassword;
       let checkCrypted= bcrypt.hashSync(checkPassword,10);//hasheando checkpassword que llega

       //el nuevo usuario se conforma con lo que llega del form + los password encriptados+imagen
        await Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            image:req.file.filename,
            email: req.body.email,
            password: passCryted,
            checkPassword: checkCrypted,
            terms: req.body.terms,
            offers: req.body.offers,
            gender_id: req.body.gender
        })
        //una vez registrado redireccionamos a login
        res.redirect("/users/login")

       }
    },

    profile:(req,res)=>{
        res.render("./users/profile" , {titulo:"Tú perfil" , user:req.session.userLogged});//pasamos la informacion de usuario logueado a la vista para mostrar info
    },
    edit: async function(req,res){
        let User = await Users.findByPk(req.params.id)
        const genders = await db.Gender.findAll() 
        res.render("./users/userEdit",{titulo:"Modificar Usuario", user: req.session.userLogged, genders})
    },
    update: async function(req,res){ //el formulario debe pasar primero las validaciones
        const errors = validationResult(req);
        let userToEdit = req.session.userLogged
        const genders = await db.Gender.findAll() 
        if (!errors.isEmpty()){
            res.render("./users/userEdit" ,{titulo:"¡Hubo un error en la edicion!" , errors:errors.mapped() ,user:req.session.userLogged, old:req.body, genders,})
        }
        
        //buscamos el mail que se esta ingresando en el form
        let userInDb = await Users.findOne({where:{
            email: {[Op.like] : req.body.email}
       }})
        
       //si el mail existe y no es el del usuario logueado(el que se está editando, vuelve al registro y muestra error)
        if (userInDb&&userInDb.email!=req.session.userLogged.email){
            res.render("./users/userEdit" ,{titulo:"¡Hubo un error en la edicion!" , errors:errors.mapped() ,user:req.session.userLogged, old:req.body, genders,errors:{
                email:{
                    msg:"Este Email ya se encuentra registrado "
                }
            }})
            
             }
             else{
        //editando al usuario existente
        let password= req.body.password;
        let passCryted= bcrypt.hashSync(password , 10);//hasheando password que llega
 
        let checkPassword= req.body.checkPassword;
        let checkCrypted= bcrypt.hashSync(checkPassword,10);//hasheando checkpassword que llega
        
        let image
        if(req.file !=undefined){
			image = req.file.filename //sobreescribe la imagen del producto con la que subio el usuario
		} else {
			image = userToEdit.image //se vuelve a guardar la misma imagen
		}

        //el nuevo usuario se conforma con lo que llega del form + los password encriptados+imagen
        await Users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            image:image,
            email: req.body.email,
            password: passCryted,
            checkPassword: checkCrypted,
            terms: "terms",
            offers: "offers",
            gender_id: req.body.gender
        },
        {
            where: {
                id: req.session.userLogged.id
            }
         })
         //una vez registrado redireccionamos a login
         res.redirect("/users/logout")
 
        }      
    },
    //metodo para desloguear usuario
    logout:(req,res)=>{
        req.session.destroy() //destruye la sesion abierta
        res.clearCookie("userEmail")
        res.redirect("/")
    },
    //accion de borrado de un usuario
    destroy: async function(req,res){
        let usuarioParaeliminar = await Users.findByPk(req.params.id)
        req.session.destroy() //destruye la sesion abierta
        res.clearCookie("userEmail")
        await usuarioParaeliminar.destroy();
		res.redirect('/');
    },
}  

module.exports = usersController