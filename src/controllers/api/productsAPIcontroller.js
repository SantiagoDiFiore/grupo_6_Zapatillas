const db = require('../../database/models');
const { Op } = require("sequelize");


const productsAPIController = {
    //listado de productos
    'list':async function(req, res){

        //consultas a la db
       let productos= await db.Product.findAll({include:["genre", "brands", "colors", "categories"],order:[['id', 'ASC']]})
       let categories= await db.Category.findAll({
        include:["products"],
        where: {
            id: {[Op.gt]: 1}
        }})
        let productsInCart = await db.ProductCart.findAll()

            //respuesta de la API
            let respuesta = {
                meta: {
                    status : 200,
                    count: productos.length,
                    url: 'api/products',
                    countCategories : categories.length,
                    productsInCart: productsInCart.length
                },
                data: productos.map(producto => {
                    return { 
                        id:producto.id,
                        name:producto.name,
                        description:producto.description,
                        price:producto.price,
                        discount:producto.discount,
                        image:"/images/products/" + producto.image,
                        size:producto.size,
                        genre: {name: producto.genre.name},
                        brands: {name: producto.brands.name},
                        colors: {name: producto.colors.name},
                        categories: {name: producto.categories.name},
                        detail: '/api/products/' + producto.id
                    }
                }),
                categoriesData:categories.map(category=>{
                    return{
                            id:category.id,
                            name:category.name,
                            totalProducts:category.products.length,
                            products:category.products
                    }
                }),
                productsInCart: productsInCart
            }
                res.json(respuesta);
        
    },
    //detalle de un producto
    'detail': (req, res) => {
        let id=req.params.id
        db.Product.findByPk(id, {include:["genre", "brands", "colors", "categories"]})
            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/'+id
                    },
                    data: {
                        id:producto.id,
                        name:producto.name,
                        description:producto.description,
                        price:producto.price,
                        discount:producto.discount,
                        image:"/images/products/" + producto.image,
                        size:producto.size,
                        genre: {name: producto.genre.name},
                        brands: {name: producto.brands.name},
                        colors: {name: producto.colors.name},
                        categories: {name: producto.categories.name},
                    }
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = productsAPIController;