const express=require('express');
const conectarDB = require('./config/db');
const app=express();
const cors = require('cors');

conectarDB();
app.use(cors({
    origin:'*'
}));  
app.use(express.json());
app.use('/', require('./routes/animes'));

app.listen(3000, ()=>{
    console.log("hola ");
});

