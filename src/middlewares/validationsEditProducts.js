const {body} = require("express-validator");
const path = require("path");

const validationsEditProducts =[
    body("name").notEmpty().withMessage("Tienes que escribir un nombre para el producto").bail().isLength({min: 5}).withMessage("Tienes que usar 5 caracteres o más"),
    body("description").notEmpty().withMessage("Tienes que escribir una descripcion para el producto").bail().isLength({min: 20}).withMessage("Tienes que usar 20 caracteres o más"),
    body("genre").notEmpty().withMessage("Tienes que seleccionar un género para el producto"),
    body("size").notEmpty().withMessage("Tienes que seleccionar al menos un talle"),
    body("price").notEmpty().withMessage("Debes completar el precio del producto").bail().isNumeric().withMessage("Debes colocar un formato numerico"),
    body("discount").notEmpty().withMessage("Debes completar el descuento del producto").bail().isNumeric().withMessage("Debes colocar un formato numerico"),
    body("image").custom((value,{req})=>{
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png" , ".gif"];
  
      if(file){
        let fileExtensions=path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtensions)){
          throw new Error("Las extensiones aceptadas son "+ acceptedExtensions.join(","));
  
        }
        
      }
        
      return true
    }),
    body("brand").custom((value,{req})=>{
      let notBrand = req.body.brand
      if(notBrand == 1){
        throw new Error("Tienes que seleccionar una marca");
      }
      return true
    }),
    body("colors").custom((value,{req})=>{
      let notColor = req.body.colors
      if(notColor == 1){
        throw new Error("Tienes que seleccionar un color");
      }
      return true
    }),
    body("category").custom((value,{req})=>{
      let notCategory = req.body.category
      if(notCategory == 1){
        throw new Error("Tienes que seleccionar una categoría");
      }
      return true
    })
] 

module.exports = validationsEditProducts;