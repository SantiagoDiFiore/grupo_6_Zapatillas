const { json, response } = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.Product;


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //muestra todos los productos
    list: (req, res) => {
        Products.findAll()
        .then(response =>{
            res.render("./products/products",{titulo:"Kicks - Productos", products: response, toThousand})
        })
    },

    //muetra detalle de un producto
    detail: async function(req,res){
        const producto = await Products.findByPk(req.params.id)
        const products = await Products.findAll()
        let titulo = producto.name
        let size = JSON.parse(producto.size, 'utf-8')
        
        res.render("./products/productDetail",{titulo, producto, products, size, toThousand})
        
    },

    //muestra el formulario de creacion de producto
    create: async function(req,res){
        const brands = await db.Brand.findAll()
        const categories = await db.Category.findAll()
        const colors = await db.Color.findAll()
        const genres = await db.Genre.findAll()
        res.render("./products/productAdd",{titulo:"Nuevo Producto", brands, categories, colors, genres})
    },

    //acción de creacion del producto
    store: async function(req,res){
        // filtrar y definir la imagen del prodcuto
        let image
        if(!req.file){
            image="default-image.jpg";
        }else{
            image=req.file.filename;
        };

        await Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: image,
            size: req.body.size,
            genre_id: req.body.genre,
            brands_id: req.body.brand,
            colors_id: req.body.colors,
            category_id: req.body.category
        })
        res.redirect("/products") 
    },

    //muestra el formulario de edicion de un producto
    edit: async function(req,res){
        let Product = await Products.findByPk(req.params.id)
        const brands = await db.Brand.findAll()
        const categories = await db.Category.findAll()
        const colors = await db.Color.findAll()
        const genres = await db.Genre.findAll()
        res.render("./products/productEdit",{titulo:"Modificar Producto", producto: Product, brands, categories, colors, genres})
    },
    //accion de edición del producto
    update: async function(req,res){
        let productToEdit = await Products.findByPk(req.params.id)
        let image
        if(req.file !=undefined){
			image = req.file.filename //sobreescribe la imagen del producto con la que subio el usuario
		} else {
			image = productToEdit.image //se vuelve a guardar la misma imagen
		}
        await Products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: image,
            size: req.body.size,
            genre_id: req.body.genre,
            brands_id: req.body.brand,
            colors_id: req.body.colors,
            category_id: req.body.category
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products")
    },

    //accion de borrado de un producto
    destroy: async function(req,res){
        let Product = await Products.findByPk(req.params.id)
        await Product.destroy();
		res.redirect('/');
    },

    //muestra el carrito de compra
    productCart: (req, res) => {
        Products.findAll()
        .then(response=>{
            res.render("./products/productCart" ,{titulo:"Carrito", products:response , toThousand})
        })
    },

    //muestra todos los productos para hombres
    productsMan: (req,res) =>{
        Products.findAll()
        .then(response=>{
            res.render("./products/productsMan",{titulo:"Kicks - Hombre", products:response, toThousand})
        })
    },

    //muestra todos los productos para mujeres
    productsWoman: (req,res) =>{
        Products.findAll()
        .then(response=>{
            res.render("./products/productsWoman", {titulo:"Kicks - Mujer", products: response , toThousand})
        })
    },

    //muestra todos los productos para niños
    productsKids: (req,res) =>{
        Products.findAll()
        .then(response=>{
            res.render("./products/productsKids" , {titulo:"Kicks - Niños", products:response , toThousand})
        })
    },

    //muestra todos los productos por marcas
    productsMarks: (req,res) =>{
        res.render("./products/productsMarks" , {titulo:"Kicks - Marcas", products:products , toThousand})
    },

}  

module.exports = productsController