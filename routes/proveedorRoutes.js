const express = require('express');
let proveedorController=require('../controller/proveedorController');

let router = express.Router();
router.get('/', proveedorController.traerProveedor);
router.post('/', proveedorController.adicionarProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router