//Dependencias
const express = require('express');
const app = express();
const cors = require('cors');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Enrutamientos importados
app.use(require('./routes/index'));

//Levantamiento del servidor
app.listen(3000);
console.log('Servidor activo en el puerto 3000');
