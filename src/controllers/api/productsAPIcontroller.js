const db = require('../../database/models');
const { Op } = require("sequelize");


const productsAPIController = {
    //listado de productos
    'list':async function(req, res){

        //consultas a la db
       let productos= await db.Product.findAll({include:["genre", "brands", "colors", "categories"],order:[['id', 'ASC']]})
       let categories= await db.Category.findAll()

         //filtrando las categorias de los productos
         let enOferta = productos.filter(producto => producto.category_id == 2);
         let ultimosAgregados = productos.filter(producto => producto.category_id == 3);
         let destacados = productos.filter(producto => producto.category_id == 4);
         let otros = productos.filter(producto => producto.category_id == 5);
   
        //contando las categorias
        let countCategories = categories
        
            //respuesta de la API
            let respuesta = {
                meta: {
                    status : 200,
                    count: productos.length,
                    url: 'api/products',
                    countByCategory:{ 
                        enOferta:enOferta.length,
                        ultimosAgregados:ultimosAgregados.length,
                        destacados:destacados.length,
                        otros:otros.length
                    },
                    countCategories : countCategories.length - 1
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
                })
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