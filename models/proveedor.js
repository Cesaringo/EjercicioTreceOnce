const conn = require('../database/database')
class Proveedor {
    async listartodos(){
        let [rows] = await conn.query('SELECT * FROM proveedor');
        return rows;
    }
}
module.exports = Proveedor;