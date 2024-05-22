

//Importando express js
import express from 'express';
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// Creando una instancia de express
const app = express();

app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
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
    console.log(`🎉 Servidor en http://localhost:${PORT} 🎉 `);

    // Se agrega ruta shop
app.use(shopRouter);

// Registrando middleware para
// el error 404
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).send(`
  <h1 
    style="color: crimson; text-align: center; font-size: 400%; margin: 3em 0 0 0">
  🤷 404 RESOURCE NOT FOUND 🤷
  </h1>
  `);
});

// Definiendo puertos
const port = 3000;

});