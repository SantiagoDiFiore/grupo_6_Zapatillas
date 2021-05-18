const {body}=require("express-validator");
const path= require("path");

const validationsProducts =[
    body("name").notEmpty().withMessage("Tienes que escribir un nombre para el producto").bail().isLength({min: 5}).withMessage("Tienes que usar 5 caracteres o más"),
    body("description").notEmpty().withMessage("Tienes que escribir una descripcion para el producto").bail().isLength({min: 20}).withMessage("Tienes que usar 20 caracteres o más"),
    body("genre").notEmpty().withMessage("Tienes que seleccionar un género para el producto"),
    body("brand").notEmpty().withMessage("Tienes que seleccionar una marca"),
    body("size").notEmpty().withMessage("Tienes que seleccionar al menos un talle"),
    body("colors").notEmpty().withMessage("Tienes que seleccionar un color"),
    body("category").notEmpty().withMessage("Tienes que seleccionar una categoría"),
    body("price").notEmpty().withMessage("Debes completar el precio del producto").bail().isNumeric().withMessage("Debes colocar un formato numerico"),
    body("discount").notEmpty().withMessage("Debes completar el descuento del producto").bail().isNumeric().withMessage("Debes colocar un formato numerico"),
    body("image").custom((value,{req})=>{
      let file=req.file;
      let acceptedExtensions=[".jpg", ".png" , ".gif"];
  
      if(!file){
        throw new Error("Tienes que subir una imagen");
      }else{
        let fileExtensions=path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtensions)){
          throw new Error("Las extensiones aceptadas son "+ acceptedExtensions.join(","));
  
        }
      }
      return true
    }),
] 

module.exports = validationsProducts;