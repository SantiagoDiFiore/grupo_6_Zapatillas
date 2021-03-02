const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productosController = {
    index: (req, res) => {
        res.render("./products/products" ,{titulo:"Productos" , products: products, toThousand})
    },

    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito"})
    },
    productDetail: (req,res)=>{
        let parametro=req.params.id;
        res.render("./products/productDetail",{titulo:"Detalle" ,products: products , parametro:parametro})
    },
    newproduct: (req,res)=>{
        res.render("./products/productAdd",{titulo:"Nuevo Producto"})
    },
    changeProduct: (req,res)=>{
        res.render("./products/productEdit",{titulo:"Modificar Producto"})
    },

}  

module.exports = productosController