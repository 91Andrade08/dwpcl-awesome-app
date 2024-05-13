

//Importando express js
import express from 'express';
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.route';
import shopRouter from './routes/shop.route.js';

// Creando una instancia de express
const app = express();

app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando el middleware para el error
// 404
app.use((req, res, next) => {
    res.status(httpStatus.NOT_FOUND)
    .send("<h1 style='color: crimson;'>🤷‍♂️ Not found 🤷‍♂️</h1>")
  });

//Establecer configuraciones del server
const PORT = 3000;
const IP = "0.0.0.0"

//Poniendo a trabajar el servidor
app.listen(PORT, IP, (err)=>{
    //Verificamos si hay error
    if (err) console.log("❌ Error al arrancar el server 🙁");
    // 
    console.log(`🎉 Servidor escuchando en http://localhost:${PORT} 🎉 `);

});