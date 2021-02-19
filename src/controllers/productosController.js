const productosController = {
    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito"})
    },
    productDetail: (req,res)=>{
        res.render("./products/productDetail",{titulo:"Detalle"})
    },
   
}  

module.exports = productosController