const Producto = require('../models/producto');
const ProductoInstancia = new Producto ();

exports.traerProductos=async(req, res)=>{
    try{
        let rest = await ProductoInstancia.listartodos();
        console.log(rest);
        res.json(rest);
    }

    catch(error){
        res.json({error: "Error al obtener Producto"})
    }

};

exports.adicionarProductos=async(req, res)=>{
    try {
        let rest = await ProductoInstancia.guardarProductos();
        console.log(rest);
        res.json(rest);
    }
    catch(e){
        res.json({e: "Error al obtener Producto"})
    }
   
};

exports.actualizarProductos=async(req, res)=>{
    console.log('ruta de producto actualizar');
    res.json({mensaje: 'ruta de producto actualizar'})
};

exports.eliminarProductos=async(req, res)=>{
    console.log('ruta de producto eliminar');
    res.json({mensaje: 'ruta de producto eliminar'})
};

