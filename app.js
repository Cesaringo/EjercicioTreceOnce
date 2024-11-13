const productoRoutes = require('./routes/productoRoutes')
const proveedorRoutes = require('./routes/proveedorRoutes')
const empresasRoutes = require('./routes/empresasRoutes')

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json)
app.use('/api/productos', productoRoutes)

app.use('/api/proveedor', proveedorRoutes)

app.use('/api/empresas', empresasRoutes)

app.listen(port, ()=>{
    console.log("Servidor corriendo" + port);
});