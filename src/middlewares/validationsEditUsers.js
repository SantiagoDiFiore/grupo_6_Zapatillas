const {body} = require("express-validator");
const path = require("path");

const validationsEditUsers = [
    body("firstName").notEmpty().withMessage("Tienes que escribir un nombre").bail().isLength({min: 2}).withMessage("Tienes que usar 2 caracteres o más"),
    body("lastName").notEmpty().withMessage("Tienes que escribir un apellido").bail().isLength({min: 2}).withMessage("Tienes que usar 2 caracteres o más"),
    body("birthday").notEmpty().withMessage("Tienes que completar tú fecha de nacimiento"),
    body("gender").notEmpty().withMessage("Tienes que seleccionar un género"),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail().isEmail().withMessage("Tienes que usar el formato usuario@correo.com"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail().isLength({min: 8}).withMessage("Tienes que usar 8 caracteres o más").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial"),
    body("checkPassword").notEmpty().withMessage("Tienes que repetir tu contraseña").bail().isLength({min: 8}).withMessage("Tienes que usar 8 caracteres o más").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial")
    .custom(async (checkPassword, {req}) => { 
      const password = req.body.password 
      // si la contraseña y el check no coinciden, mostrar este error
        if(password !== checkPassword){ 
        throw new Error('Las contraseñas no coinciden') 
      } 
    }), 
    body("image").custom((value,{req})=>{
      let file=req.file;
      let acceptedExtensions = [".jpg", ".png" , ".gif"];
  
      if(file){
        let fileExtensions=path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtensions)){
          throw new Error("Las extensiones aceptadas son "+ acceptedExtensions.join(","));
  
        }
      }
      return true
    })
  ]


module.exports = validationsEditUsers;