const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// Inicialización
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/trabajos', require('./routes/index.routes'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;