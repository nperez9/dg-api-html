const express = require('express');
const router = express.Router();

const { getMovies } = require('../controllers/movies.controller');

/** 
 * Ejemplo de un CRUD con REST
 * las rutas te una api rest van en plural, es una buena practica.
 */
// esta peticion,usa /api + /movies?
router.get('/movies', getMovies); //si -> entra y ejecuta la funcion
router.get('/movies/:id', getMovies);
router.post('/movies', getMovies);
router.delete('/movies/:id', getMovies);
router.put('/movies/:id')

module.exports = router;