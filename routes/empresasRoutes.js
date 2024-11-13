const express = require('express');
let empresasController=require('../controller/empresasController');

let router = express.Router();
router.get('/', empresasController.traerempresas);
router.post('/', empresasController.adicionarempresas);
router.put('/:id', empresasController.actualizarempresas);
router.delete('/:id', empresasController.eliminarempresas);

module.exports = router