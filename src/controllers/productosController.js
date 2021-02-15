const path = require("path")

const productosController = {
    productCart: (req, res) => {
        res.sendFile(path.resolve("./views/products/productCart.html"));
    },
    productDetail: (req,res)=>{
        res.sendFile(path.resolve("./views/products/productDetail.html"))
    }
   
}  

module.exports = productosController