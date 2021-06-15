const express = require("express");
const router = express.Router();
const path = require("path");
const usersController = require("../controllers/usersController")
const multer = require("multer");
const validations = require("../middlewares/validationsRegister")//requerimos el middleware con las validaciones de express-validator
const validationsEditUsers = require("../middlewares/validationsEditUsers")//middleware que no permite ingresar al login ni register si el usuario ESTÁ logueado
const authMiddleware = require("../middlewares/authMiddleware")//middleware que no permite ingresar al perfil si el usuario No está logueado
const guestMiddleware = require("../middlewares/guestMiddleware")//middleware que no permite ingresar al login ni register si el usuario ESTÁ logueado

//configuracion de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/users")
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
   
  const upload = multer({ storage: storage })

  
//MUESTRA EL LOGIN
router.get("/login",guestMiddleware, usersController.login);
//PROCESA EL LOGIN
router.post("/login", usersController.loginProcess);

// MUESTRA EL FORMULARIO DE REGISTRO
router.get("/register",guestMiddleware, usersController.register);
//PROCESA EL FORMULARIO DE REGISTRO
router.post("/register",upload.single("image"),validations, usersController.processRegister);

//MUESTRA EL PERFIL DE USUARIO
router.get("/profile",authMiddleware, usersController.profile);

//PROCESA EL LOGOUT
router.get("/logout" , usersController.logout);

//RUTAS DE EDICION DE USUARIO
router.get("/edit",authMiddleware,usersController.edit);
router.put("/edit", upload.single("image"), validationsEditUsers, usersController.update);

//RUTA DE BORRADO DE USUARIO
router.delete("/delete/:id",usersController.destroy);

module.exports=router;