//Importando el modulo HTTP
import http from 'http';
//Importando express js
import express from 'express'


// Creando una instancia de express
const app = express();

//Registrando el primer middleware
app.use((req,res,next)=>{
    console.log("📢 Middleware #1");
    //Pasamos la ejecución al siguiente responsable
    next();

});
app.use((req,res,next)=>{
    console.log("📢 Middleware #2");
    //Pasamos la ejecución al siguiente responsable
    res.send(`
    <h1> Welcome to my first App</h1>
    <p> This is my awesome app!!</p>
    `)

});

// Creando servidor HTTP
const server = http.createServer(app);

//eSTABLECER CONFIGURACIONES DEL SERVER
const PORT = 3000;
const IP = "0.0.0.0"

//Poniendo a trabajar el servidor
server.listen(PORT, IP, (err)=>{
    //Verificamo si hay error
    if (err) console.log("❌ Error al arrancar el server 🙁");
    // 
    console.log('🎉 Servidor escuchando en http://localhost:${PORT} 🎉 ');

});