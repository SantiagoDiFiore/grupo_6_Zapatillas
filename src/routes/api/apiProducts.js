const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas

//Listado de productos API
router.get('/', productsAPIController.list);

//Detalle de un producto API
router.get('/:id', productsAPIController.detail);


module.exports = router;