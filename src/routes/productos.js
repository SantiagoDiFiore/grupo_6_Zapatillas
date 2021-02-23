const express= require("express");
const router= express.Router();
const path= require("path");

const productosController = require("../controllers/productosController")


router.get('/', productosController.index);

router.get('/productCart', productosController.productCart);

//router.get("/productDetail", productosController.productDetail);

router.get("/productDetail/:id", productosController.productDetail);

router.get("/productAdd",productosController.newproduct);

router.post("/productAdd",productosController.newproduct);


module.exports=router;