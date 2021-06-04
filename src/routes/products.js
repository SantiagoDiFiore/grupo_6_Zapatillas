const express= require("express");
const router= express.Router();
const path= require("path");
const multer= require("multer");
const validationsProducts = require("../middlewares/validationsProducts")
const validationsEditProducts = require("../middlewares/validationsEditProducts")
const adminMiddleware = require("../middlewares/adminMiddleware")//middleware que no permite ingresar al crear o editar un producto si el usuario no es admin


//configuracion de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/products")
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
   
  const upload = multer({ storage: storage })

const productsController = require("../controllers/productsController")
//rutas del carrito 
router.get('/productCart', productsController.productCart);//muestra carrito
router.post("/productCart", productsController.cartStore);//almacena un producto en el carrito
router.get("/productCart/delete/:id", productsController.destroyProduct);//elima un producto del carrito
router.get("/productCart/checkout", productsController.checkout);//finaliza compra y vacia carrito

//ruta a listado de productos
router.get('/', productsController.list);

//ruta a listado de productos para hombres
router.get("/productsMan", productsController.productsMan);

//ruta a listado de productos para mujeres
router.get("/productsWoman", productsController.productsWoman);

//ruta a listado de productos para niños
router.get("/productsKids", productsController.productsKids);

//ruta a listado de productos para marcas
router.get("/productsMarks", productsController.productsMarks);

//rutas de creacion de productos
router.get("/create", adminMiddleware, productsController.create);
router.post("/",upload.single("image"),validationsProducts ,productsController.store);

//ruta a detalle de producto
router.get("/:id", productsController.detail);

//rutas de edicion de producto
router.get("/:id/edit", adminMiddleware, productsController.edit);
router.put("/:id", upload.single("image"),validationsEditProducts,productsController.update);

//ruta de borrado de producto
router.delete("/:id",productsController.destroy);


module.exports=router;