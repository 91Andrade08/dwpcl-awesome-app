

//Importando express js
import express from 'express';
import httpStatus from 'http-status';
// Template Engine
import { engine } from 'express-handlebars';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// Importando el directorio raiz
import { ROOT_DIR } from './helpers/paths.js'

// Creando una instancia de express
const app = express();

// Se crea instancia del template engine
const hbsTemplateEngine = engine({
  // Extensión de los archivos de plantillas
  extname: '.hbs',
  // Nombre del diseño por defecto
  defaultLayout: 'main',
});
// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para el servidor
// de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
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