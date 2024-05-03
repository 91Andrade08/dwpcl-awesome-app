//Importando el modulo http
import http from 'http';

//Importando express js
import express from 'express';
import { log } from 'console';

// Creando una instancia de express
const app = express();


// Se registra el middleware del body-parser
app.use(express.urlencoded({extended: true}));

//Ruta about
//GET /about

//Registrando el primer middleware
app.use('/about',(req,res)=>{
    console.log("📢 Sirviendo la ruta '/about'");

    // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

// GET '/add-product'
app.get('/add-product', (req, res, next) => {
    // Si la petición es post pasamos el siguiente
    // Middleware
    if(req.method === "POST") return next();
  
    // Servimos el formulario
    console.log("📢 Sirviendo formulario...");
    res.send(`
    <form action="/add-product" method="POST">
      <label>
        Ingresar Nombre
        <input type="text" name="title">
      </label>
      <button type="submit">Add product</button>
    </form>
    `);
  });
 // POST '/add-product'
app.use('/add-product', (req, res)=>{
    // Realizaremos la extracción de
    // parametros dentro de la peticion
    return res.json(req.body);
    return res.redirect('/');
  });

// Ruta Raíz
// GET /
app.use((req, res)=>{
    console.log("📢 Sirviendo la ruta '/'");
    // Se contesta al server
    res.send(`
      <h1>Welcome to Express Js</h1>
      <p>This is my awesome app! 😎</p>
    `);
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