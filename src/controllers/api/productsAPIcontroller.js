const db = require('../../database/models');
const { Op } = require("sequelize");


const productsAPIController = {
    //listado de productos
    'list': (req, res) => {
        db.Product.findAll()
        .then(productos => {
            //filtrando las categorias de los productos
            let enOferta=productos.filter(producto=>producto.category_id==2);
            let ultimosAgregados=productos.filter(producto=>producto.category_id==3);
            let destacados=productos.filter(producto=>producto.category_id==4);
            let otros=productos.filter(producto=>producto.category_id==5);

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
                    }   
                },
                data: productos
            }
                res.json(respuesta);
            })
    },
    //detalle de un producto
    'detail': (req, res) => {
        let id=req.params.id
        db.Product.findByPk(id)
            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/'+id
                    },
                    data:{
                        id:producto.id,
                        name:producto.name,
                        description:producto.description,
                        price:producto.price,
                        discount:producto.discount,
                        image:"/images/products/"+producto.image,
                        size:producto.size,
                        genre_id: producto.genre_id,
                        brands_id: producto.brands_id,
                        colors_id: producto.colors_id,
                        category_id: producto.category_id
                    }
                }
                res.json(respuesta);
            });
    }
    
}
//image:"/images/products/"+producto.image 
//id:producto.id,
//name:producto.name
module.exports = productsAPIController;