const{validationResult} = require("express-validator");
const db = require('../database/models');
const Products = db.Product;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //muestra todos los productos
    list: async function(req, res) {
        let userLogged = await req.session.userLogged
        Products.findAll()
        .then(response =>{
            res.render("./products/products",{titulo:"Kicks - Productos", products: response, toThousand, userLogged})
        })
    },

    //muetra detalle de un producto
    detail: async function(req,res){
        const producto = await Products.findByPk(req.params.id)
        const products = await Products.findAll()
        let userLogged = await req.session.userLogged
        let titulo = producto.name
        let size = JSON.parse(producto.size, 'utf-8')
        
        res.render("./products/productDetail",{titulo, producto, products, size, toThousand, userLogged})
        
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
        const errors = validationResult(req)
        // filtrar y definir la imagen del prodcuto
        let image
        if(!req.file){
            image="default-image.jpg";
        }else{
            image=req.file.filename;
        };
        const brands = await db.Brand.findAll()
        const categories = await db.Category.findAll()
        const colors = await db.Color.findAll()
        const genres = await db.Genre.findAll()

        if(!errors.isEmpty()){
            res.render("./products/productAdd",{titulo:"¡Hubo un error en la creación del producto!", errors:errors.mapped() , old:req.body, brands, categories, colors, genres})
        }else{
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
        }
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
        const errors = validationResult(req);
        const brands = await db.Brand.findAll()
        const categories = await db.Category.findAll()
        const colors = await db.Color.findAll()
        const genres = await db.Genre.findAll()
        let productToEdit = await Products.findByPk(req.params.id)

        //definiendo la imagen
        let image
        if(req.file !=undefined){
			image = req.file.filename //sobreescribe la imagen del producto con la que subio el usuario
		} else {
			image = productToEdit.image //se vuelve a guardar la misma imagen
		}
        
        //manejo de errores
        //si hay errores se muestran en la vista
        if(!errors.isEmpty()){
            res.render("./products/productEdit",{titulo:"¡Hubo un error en la edición del producto!", errors:errors.mapped() , old:req.body, producto: productToEdit, brands, categories, colors, genres})
        }else{
            await Products.update({//si no hay errores se procede a la edicion
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

        }
    },

    //accion de borrado de un producto
    destroy: async function(req,res){
        let Product = await Products.findByPk(req.params.id)
        await Product.destroy();
		res.redirect('/');
    },

    //muestra el carrito de compra
    productCart: async function(req, res){
        let Product = await Products.findAll()
        let userLogged = await req.session.userLogged
        if(userLogged){
            let ProductCart = await db.ProductCart.findAll({include:"products", where:{
                user_id: userLogged.id
            }})
            res.render("./products/productCart" ,{titulo:"Carrito", products:Product , listado: ProductCart, userLogged, toThousand})
        }else{
            res.render("./products/productCartGuest" ,{titulo:"Carrito"})
        }
        
    },
    //Guarda un producto en el carrito
    cartStore:async function(req,res){
        let usuariologueado=await req.session.userLogged;
        
        if(usuariologueado){
            await db.ProductCart.create({
                size: req.body.size,
                price: req.body.price,
                name: req.body.name,
                user_id:usuariologueado.id,
                product_id:req.body.product_id,
                amount: req.body.amount        
               })
               
             
               res.redirect("/products/productCart")
        }else{
            res.render("./products/productCartGuest" ,{titulo:"Carrito"})
        }
         
    },
    //elimina un producto del carrito
    destroyProduct:async function(req,res){
        let idParaEliminar=await req.params.id;

        let productoParaEliminar=await db.ProductCart.findByPk(idParaEliminar)
        productoParaEliminar.destroy();

        res.redirect("/products/productCart")
             
    },
    
    //finaliza la compra y vacia carrito
    checkout:async function(req,res){
        let user=await req.session.userLogged;

        let idParaEliminar=await req.session.userLogged.id;
        
        let todosLosProductos=await db.ProductCart.findAll({where:{
            user_id:idParaEliminar
        }});
        
        await db.ProductCart.destroy({where:{
            user_id:idParaEliminar
        }});
       
        
        res.render("./products/productOrder",{titulo:"Tu orden",user,products:todosLosProductos,toThousand})
             
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