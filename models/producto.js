const conn = require('../database/database')
class Productos {
    async listartodos(){
        let [rows] = await conn.query('SELECT * FROM productos');
        return rows;}

        async adicionarProductos(producto){
            let [nombre, precio, descripcion] = producto;
            let [rest] = await conn.query('INSERT INTO productos(nombre, precio, descripcion) VALUES(?, ?, ?)', [nombre, precio, descripcion] );
            return rest;
    }};

module.exports = Productos;

