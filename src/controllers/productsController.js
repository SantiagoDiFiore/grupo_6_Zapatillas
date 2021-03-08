const { json } = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //muestra todos los productos
    index: (req, res) => {
        res.render("./products/products" ,{titulo:"Productos" , products: products, toThousand})
    },

    //muetra detalle de un producto
    detail: (req,res)=>{
        let parametro=req.params.id;
        let titulo= products.find(producto=>producto.id==parametro);

        let producto= products.find(product=> product.id == req.params.id);
		
		
        res.render("./products/productDetail",{ titulo:titulo.name ,producto: producto ,products:products, parametro:parametro, toThousand})
    },

    //muestra el formulario de creacion de producto
    create: (req,res)=>{
        res.render("./products/productAdd",{titulo:"Nuevo Producto"})
    },
    //acción de creacion del producto
    store: (req,res)=>{
        res.send(req.file)
    },

    //muestra el formulario de edicion de un producto
    edit: (req,res)=>{
        let producto= products.find(product=> product.id == req.params.id);
        res.render("./products/productEdit",{titulo:"Modificar Producto", producto: producto})
    },
    //accion de edición del producto
    update: (req,res)=>{
        
    },

    //accion de borrado de un producto
    destroy: (req,res)=>{
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
    },


    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito", products:products , toThousand})
    },
    
    
    

}  

module.exports = productsController