const { Router } = require('express');
const router = Router();

//Importacion de los metodos desde index.controllers
const { getUsuarios, crearUsuarios, iniciarSesion } = require('../controllers/index.controller');

router.get('/api/obtenerusuarios', getUsuarios);
router.post('/api/crearusuarios', crearUsuarios);
router.post('/api/iniciarsesion', iniciarSesion);
module.exports = router;