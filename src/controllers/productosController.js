const lista=[{
id:0,
modelo:"NEW BALANCE 997 SPORT CHINESE N.Y",
precio:"$15.799",
img:"new-balance3.png",
},
{
id:1,
modelo:"VANS OLD SKOOL BLACK WHITE",
precio:"$11.200",
img:"vans1.png",
},
{
id:2,
modelo:"PUMA FUTURE RIDER NES (2020)",
precio:"$ 22.000",
img:"puma3.png",
},

]

const productosController = {
    index: (req, res) => {
        res.render("./products/products" ,{titulo:"Productos" , lista:lista})
    },

    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito"})
    },
    productDetail: (req,res)=>{
        res.render("./products/productDetail",{titulo:"Detalle"})
    },
   
}  

module.exports = productosController