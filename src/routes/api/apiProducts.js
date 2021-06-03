const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//ruta a listado de productos API
router.get('/', productsAPIController.list);
//Detalle de una película API
router.get('/:id', productsAPIController.detail);


module.exports = router;