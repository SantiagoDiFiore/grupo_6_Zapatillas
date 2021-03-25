
const User=require("../models/User");//requerimos el modelo con todos sus metodos para luego usarlos en el controlador
const{validationResult} =require("express-validator");
const bcrypt=require("bcryptjs");

const usersController = {
    login: (req,res)=>{
        res.render("./users/login",{titulo:"Ingresá"})
    },

    loginProcess:(req,res)=>{
        //validamos que el email que llega por formulario, coincida con alguno de la db.(usando metodo del modelo)
        let userToLogin= User.findByField("email",req.body.email);
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
                    msg:"Las credenciales son invalidas"
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

    register: (req,res)=>{
        res.render("./users/register",{titulo:"Registrate"})
    },
    processRegister: (req,res)=>{
       //el formulario debe pasar primero las validaciones
       const errors=validationResult(req);
        
       if (!errors.isEmpty()){
           res.render("./users/register" ,{titulo:"¡Hubo un error en la registracion!" , errors:errors.mapped() , old:req.body})
       }
       //si pasa las validaciones primarias debe checkearse que el usuario NO exista en la db,chequeando por mail
       //si existe se debe mostrar un error, si no existe se puede continuar con el registro.

       let userInDb= User.findByField("email" , req.body.email);//usamos el metodo findbyfield del modelo,
       // recibe como parametros el campo a chequear en db y el campo que completa el usuario en form.
       
       //si el usuario existe volvemos a renderizar la vista del formulario y personalizamos un error para el campo mail
       if(userInDb){
        res.render("./users/register" ,{titulo:"Registrate" ,
            errors:{
                email:{
                    msg:"El usuario se encuentra registrado"
                }
            }, 
            old:req.body})

       }else{
           //registrando al nuevo usuario (si su mail no esta registrado en db)
       let password= req.body.password;
       let passCryted= bcrypt.hashSync(password , 10);//hasheando password que llega

       let checkPassword= req.body.checkPassword;
       let checkCrypted= bcrypt.hashSync(checkPassword,10);//hasheando checkpassword que llega

       //el nuevo usuario se conforma con lo que llega del form + los password encriptados+imagen
        let newUser={
        ...req.body,
        password:passCryted,//pisa el password que llega en el body
        checkPassword:checkCrypted,
        image:req.file.filename,
        } 

      let userCreated= User.create(newUser)//usamos el metodo create del modelo para agregar un usuario a la db., lo guardamos en una variable para luego usarlo.
       res.redirect("/users/login")//una vez registrado redireccionamos a login

       }
    },

    profile:(req,res)=>{
        
        res.render("./users/profile" , {titulo:"Tú perfil" , user:req.session.userLogged});//pasamos la informacion de usuario logueado a la vista para mostrar info
    },

    //metodo para desloguear usuario
    logout:(req,res)=>{
        req.session.destroy() //destruye la sesion abierta
        res.clearCookie("userEmail")
        res.redirect("/")
    }
}  

module.exports = usersController