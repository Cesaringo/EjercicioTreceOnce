
let mysql=require('mysql2/promise');

const conn=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'angelito',
    database: 'bdproductos',
    waitForConnections: true ,
    connectionLimit: 10 ,
    queueLimit: 0
})
module.exports=conn