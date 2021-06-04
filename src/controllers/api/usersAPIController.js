const db = require('../../database/models');
const { Op } = require("sequelize");


const productsAPIController = {
    //listado de usuarios
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {    
            //respuesta de la API
            let respuesta = {
                meta: {
                    status : 200,
                    count: users.length,
                    url: 'api/users',
                },
                data: users.map(user => {
                    return { 
                        id:user.id,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        birthday:user.birthday,
                        image:"/images/users/" + user.image,
                        email:user.email,
                        offers:user.offers,
                        gender_id: user.gender_id,
                        detail: '/api/users/' + user.id,
                    }
                })
            }
                res.json(respuesta);
            })
    },
    //detalle de un usuario
    'detail': (req, res) => {
        let id = req.params.id
        db.User.findByPk(id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/users/' + id
                    },
                    data: {
                        id:user.id,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        birthday:user.birthday,
                        image:"/images/users/" + user.image,
                        email:user.email,
                        offers:user.offers,
                        gender_id: user.gender_id,
                    }
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = productsAPIController;