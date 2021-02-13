const express= require("express");
const router= express.Router();
const path= require("path");


router.get('/', (req, res) => {
    //ruta a todos los productos
});
router.get('/productCart', (req, res) => {
    res.sendFile(path.resolve("./views/productCart.html"));
});
router.get("/productDetail" , (req,res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"))
});
router.get("/productDetail/:id" , (req,res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"))
});










module.exports=router;