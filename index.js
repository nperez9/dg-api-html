const express = require('express');
const app = express();

const moviesRouter = require('./routes/movies.route');

// es un post? -> req.body. si no es un post, sigue >
app.use(express.json()); //middleware 1

// Ejecuto este middleware
app.use((req, res, next) => {
  console.log('esto es un middleware ' + req.url);
  next(); // continuo a la siguiente
});

// Esta ruta, es /api/ ? 
app.use('/api', moviesRouter); //si: entro

//caso /api/movies, esto muere aca y no sigue

app.get('/api/pepito', (req, res) => {
  res.json({message: 'soy pepito'});
});

app.get('/', function (req, res) {
  console.log(__dirname);
	res.sendFile('index.html', {
    root: __dirname + "/public"
	});
});

app.use('/', express.static(__dirname + '/public/'));

app.listen(3000, () => console.log('Arranco el server'));