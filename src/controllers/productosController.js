const productosController = {
    productCart: (req, res) => {
        res.render("./products/productCart")
    },
    productDetail: (req,res)=>{
        res.render("./products/productDetail")
    },
   
}  

module.exports = productosController