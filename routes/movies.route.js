const express = require('express');
const router = express.Router();

const { getMovies } = require('../controllers/movies.controller');

// esta peticion,usa /api + /movies?
router.get('/movies', getMovies); //si -> entra y ejecuta la funcion

module.exports = router;