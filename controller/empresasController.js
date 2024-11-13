const Empresa = require('../models/empresa');
const EmpresaInstancia = new Empresa ();


exports.traerempresas=async(req, res)=>{
    try{
        let rest = await EmpresaInstancia.listartodos();
        console.log(rest);
        res.json(rest);
    }

    catch(error){
        res.json({error: "Error al obtener Empresa"})
    }

};
exports.adicionarempresas=async(req, res)=>{
    console.log('ruta de empresa post');
    res.json({mensaje: 'ruta de empresa post'})
};

exports.actualizarempresas=async(req, res)=>{
    console.log('ruta de empresa actualizar');
    res.json({mensaje: 'ruta de empresa actualizar'})
};

exports.eliminarempresas=async(req, res)=>{
    console.log('ruta de empresa eliminar');
    res.json({mensaje: 'ruta de empresa eliminar'})
};

/*module.exports =(traerProductos, actualizarProductos, actualizarProductos, eliminarProductos)*/