// Configuración de .env
require('dotenv').config();


const path = require('path');
const express = require('express');
const connectDB = require('./config/database');
const estudianteRoutes = require('./routes/estudiante.routes');
const errorHandler = require('./middleware/error.middleware');
const grupoRoutes = require('./routes/grupo.routes');

const app = express();

// Conexión a MongoDB
connectDB();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());

// Archivos estáticos
app.use(express.static('public'));

// Rutas
app.use('/api/estudiantes', estudianteRoutes);

//Grupos
app.use('/api/grupos', grupoRoutes);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/test', (req, res) => {
    res.render('test');
});

// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});