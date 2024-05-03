
//Importando express js
import express from 'express'


// Creando una instancia de express
const app = express();

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