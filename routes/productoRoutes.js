const express = require('express');
let productoController=require('../controller/productoController');

let router = express.Router();
router.get('/', productoController.traerProductos);
router.post('/', productoController.adicionarProductos);
router.put('/:id', productoController.actualizarProductos);
router.delete('/:id', productoController.eliminarProductos);

module.exports = router