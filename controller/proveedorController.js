const Proveedor = require('../models/proveedor');
const ProveedorInstancia = new Proveedor ();



exports.traerProveedor=async(req, res)=>{
    try {
        let rest = await ProveedorInstancia.listartodos();
        console.log(rest);
        res.json(rest);

    }
    catch (error){
        res.json({error: "Error al obtener proveedor"})
    }

};

exports.adicionarProveedor=async(req, res)=>{
    console.log('ruta de proveedor post');
    res.json({mensaje: 'ruta de proveedor post'})
};

exports.actualizarProveedor=async(req, res)=>{
    console.log('ruta de proveedor actualizar');
    res.json({mensaje: 'ruta de proveedor actualizar'})
};

exports.eliminarProveedor=async(req, res)=>{
    console.log('ruta de proveedor eliminar');
    res.json({mensaje: 'ruta de proveedor eliminar'})
};

/*module.exports =(traerProductos, actualizarProductos, actualizarProductos, eliminarProductos)*/