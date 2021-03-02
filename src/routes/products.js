const express= require("express");
const router= express.Router();
const path= require("path");

const productsController = require("../controllers/productsController")
//ruta al carrito 
router.get('/productCart', productsController.productCart);

//ruta a listado de productos
router.get('/', productsController.index);

//rutas de creacion de productos
router.get("/create",productsController.create);
router.post("/",productsController.store);

//ruta a detalle de producto
router.get("/:id", productsController.detail);

//rutas de edicion de producto
router.get("/:id/edit",productsController.edit);
router.put("/:id",productsController.update);

//ruta de borrado de producto
router.delete("/:id",productsController.destroy);




module.exports=router;