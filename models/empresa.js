const conn = require('../database/database')
class Empresas {
    async listartodos(){
        let [rows] = await conn.query('SELECT * FROM empresas');
        return rows;
    }
}
module.exports = Empresas;