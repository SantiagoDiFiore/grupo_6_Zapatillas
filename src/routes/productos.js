const express= require("express");
const router= express.Router();
const path= require("path");
const publicPath= path.resolve("../public");
router.use(express.static(publicPath));

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