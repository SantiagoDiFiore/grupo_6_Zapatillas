
const {body}=require("express-validator");
const path= require("path");

//validaciones
const validations=[
    body("firstName").notEmpty().withMessage("debes completar el nombre"),
    body("lastName").notEmpty().withMessage("debes completar el apellido"),
    body("birthday").notEmpty().withMessage("debes completar una fecha"),
    body("gender").notEmpty().withMessage("debes seleccionar un género"),
    body("email")
    .notEmpty().withMessage("debes completar el campo Email").bail()
    .isEmail().withMessage("debes usar el formato usuario@correo.com"),
    body("password").notEmpty().withMessage("debes introducir una contraseña"),
    body("checkPassword").notEmpty().withMessage("debes repetir tu contraseña")
    .custom(async (checkPassword, {req}) => { 
      const password = req.body.password 
      // si la contraseña y el check no coinciden, mostrar este error
        if(password !== checkPassword){ 
        throw new Error('las contraseñas no coinciden') 
      } 
    }), 
    body("image").custom((value,{req})=>{
      let file=req.file;
      let acceptedExtensions=[".jpg", ".png" , ".gif"];
  
      if(!file){
        throw new Error("debes elegir una imagen");
      }else{
        let fileExtensions=path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtensions)){
          throw new Error("las extensiones aceptadas son "+acceptedExtensions.join(","));
  
        }
      }
      return true
    }),
  ]

  module.exports=validations;