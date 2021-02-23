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
{
id:3,
modelo:"ADIDAS OZWEEGO ORANGE (YOUTH)",
precio:"$ 22.000",
img:"adidas1.png",
},
{
id:4,
modelo:"NIKE AIR MAX 90 INFRARED (2020)",
precio:"$ 21.700",
img:"nike3.png",
},

{
id:5,
modelo:"NEW BALANCE 1300 LEVI´S",
precio:"$ 21.700",
img:"new-balance4.png",
},
{
id:6,
modelo:"ADIDAS NITE JOGGER 3M NAVY",
precio:"$ 14.000",
img:"adidas2.png",
},
{
id:7,
modelo:"PUMA RS-X TOYS BONNIE BLUE ",
precio:"$ 20.000",
img:"puma1.png",
},
{
id:8,
modelo:"NIKE AIR MAX 95 OG NEON (2020)",
precio:"$ 26.000",
img:"nike1.png",
},
{
id:9,
modelo:"NEW BALANCE 327 CASABLANCA GREEN LOGO",
precio:"$ 21.700",
img:"new-balance5.png",
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
        let parametro=req.params.id;
        res.render("./products/productDetail",{titulo:"Detalle" ,lista:lista , parametro:parametro})
    },
    newproduct: (req,res)=>{
        res.render("./products/productAdd",{titulo:"Nuevo Producto"})
    },
    changeProduct: (req,res)=>{
        res.render("./products/productEdit",{titulo:"Modificar Producto"})
    },

    
   
}  

module.exports = productosController