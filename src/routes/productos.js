const express= require("express");
const router= express.Router();
const path= require("path");

const productosController = require("../controllers/productosController")


router.get('/', (req, res) => {
    //ruta a todos los productos
});
router.get('/productCart', productosController.productCart);

router.get("/productDetail", productosController.productDetail);

router.get("/productDetail/:id", productosController.productDetail);


module.exports=router;