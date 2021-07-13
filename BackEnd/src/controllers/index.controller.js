//Conexion a la base de datos
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'geoportal',
    database: 'PruebaAngular',
    port: '5432'

}),
bcrypt = require("bcrypt");

//Metodos 
const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(response.rows);
};

const crearUsuarios = async (req,res) => {
    const { nombre,apellido,correo,clave }= req.body;
    clavecifrada = await bcrypt.hash(clave, 10);
    const response =  await pool.query('INSERT INTO usuarios(nombre, apellido, correo, clave) VALUES ($1, $2, $3, $4)', [nombre, apellido, correo, clavecifrada]);
    res.json({
        message: 'Usuario Creado',
        body:{
            user:{nombre, apellido, correo, clavecifrada}
        }
    });
};
const iniciarSesion = async (req, res) => {
    const { correo, clave } = req.body;
    const response = await pool.query('SELECT *FROM usuarios WHERE correo = $1', [correo]);
    if (response.rows.length > 0) {
        const user = response.rows[0];
        bcrypt.compare(clave, user.clave, (err, isMatch) => {
            if (err) {
                console.log(err);
              }
              if (isMatch) {
                res.status(200).json("Correcto");
              }else{
                res.status(200).json("Incorrecto");
              }
        });
    }else{
        res.status(200).json("Incorrecto");
    }      
};    
module.exports = {
    getUsuarios,
    crearUsuarios,
    iniciarSesion
}