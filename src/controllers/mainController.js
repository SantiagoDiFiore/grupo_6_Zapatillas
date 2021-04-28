const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.Product;
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index:(req, res) => {
        Products.findAll()
        .then(response=>{
            res.render("index",{titulo:"Kicks - Inicio", products:response, toThousand})
        })
    },
    search:(req,res)=>{
        Products.findAll({
            where:{
                name: {[Op.like] : "%" + req.query.search + "%"}
            }
        }).then(response=>{
            let search = req.query.search
            res.render("search",{titulo:"Resultado de tu busqueda" , products:response , toThousand, search})
        })
        
    }
}  








module.exports = mainController