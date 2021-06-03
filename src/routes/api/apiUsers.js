const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas

//Listado de usuarios API
router.get('/', usersAPIController.list);

//Detalle de un usuario API
router.get('/:id', usersAPIController.detail);


module.exports = router;