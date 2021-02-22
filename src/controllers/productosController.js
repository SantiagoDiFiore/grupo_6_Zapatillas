const productosController = {
    productCart: (req, res) => {
        res.render("./products/productCart")
    },
    productDetail: (req,res)=>{
        res.render("./products/productDetail")
    },
    newproduct: (req,res)=>{
        res.render("./users/newproduct")
    },

   
}  

module.exports = productosController