const express = require('express');
const app = express();
const path= require("path");
app.use(express.static('Public'));


app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'));
});


app.get('/Registro', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/Registro.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/login.html'));
});