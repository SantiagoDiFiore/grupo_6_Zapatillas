const { json } = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.Product;

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //muestra todos los productos
    index: (req, res) => {
        res.render("./products/products" ,{titulo:"Kicks - Productos" , products: products, toThousand})
    },
    //muestra todos los productos
    prueba: (req, res) => {
        Products.findAll()
            .then(product => {
                res.send(product)
            })
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
        //filtrar y definir la imagen del prodcuto
        let image
        if(!req.file){
            image="default-image.jpg";
        }else{
            image=req.file.filename;
        };

        //definir el id del producto
        let ids = products.map(p=>p.id);//guardar en un array todos los ids
        let id= Math.max(...ids)+1;//filtra el mayor de los ids del array, se le suma 1 para el id del nuevo producto
		
        //definir el nuevo producto
        let newProduct = {
			id: id,        //el id definido previamente
			...req.body,   //lo que llega del formulario
			image: image   //la imagen definida previamente
		};
        products.push(newProduct);//guardar el producto nuevo en el listado de productos
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))//sobreescribir el Json con el nuevo producto y pasados a formatoJSON. 
        res.redirect("./products")//redirigir al listado de productos. 
    },

    //muestra el formulario de edicion de un producto
    edit: (req,res)=>{
        let producto= products.find(product=> product.id == req.params.id);
        res.render("./products/productEdit",{titulo:"Modificar Producto", producto: producto})
    },
    //accion de edición del producto
    update: (req,res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        let image
        if(req.file !=undefined){
			image = req.file.filename //sobreescribe la imagen del producto con la que subio el usuario
		} else {
			image = productToEdit.image //se vuelve a guardar la misma imagen
		}
        productToEdit = {
            id: productToEdit.id, //el id definido previamente
            ...req.body, //lo que llega del formulario
            image: image //la imagen definida previamente
        };

        let newProducts = products.map(product => {
            if (product.id == productToEdit.id){
                return product = {...productToEdit};
            }
            return product;
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' ')); //sobreescribir el Json con los productos actualizados y pasados a formatoJSON. 
		res.redirect('/products'); //redirigir al listado de productos. 
    },

    //accion de borrado de un producto
    destroy: (req,res)=>{
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
    },
    //muestra el carrito de compra
    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito", products:products , toThousand})
    },

    //muestra todos los productos para hombres
    productsMan: (req,res) =>{
        res.render("./products/productsMan" , {titulo:"Kicks - Hombre", products:products , toThousand})
    },

    //muestra todos los productos para mujeres
    productsWoman: (req,res) =>{
        res.render("./products/productsWoman" , {titulo:"Kicks - Mujer", products:products , toThousand})
    },

    //muestra todos los productos para niños
    productsKids: (req,res) =>{
        res.render("./products/productsKids" , {titulo:"Kicks - Niños", products:products , toThousand})
    },

    //muestra todos los productos por marcas
    productsMarks: (req,res) =>{
        res.render("./products/productsMarks" , {titulo:"Kicks - Marcas", products:products , toThousand})
    },

}  

module.exports = productsController