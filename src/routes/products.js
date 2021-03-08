const express= require("express");
const router= express.Router();
const path= require("path");
const multer= require("multer");

//configuracion de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../public/images/products")
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
   
  const upload = multer({ storage: storage })

const productsController = require("../controllers/productsController")
//ruta al carrito 
router.get('/productCart', productsController.productCart);

//ruta a listado de productos
router.get('/', productsController.index);

//rutas de creacion de productos
router.get("/create",productsController.create);
router.post("/",upload.single("imagenProducto") ,productsController.store);

//ruta a detalle de producto
router.get("/:id", productsController.detail);

//rutas de edicion de producto
router.get("/:id/edit",productsController.edit);
router.put("/:id", upload.single("imagenProducto"),productsController.update);

//ruta de borrado de producto
router.delete("/:id",productsController.destroy);




module.exports=router;