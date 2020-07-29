// Verificación del modo de ejecución, si es modo de desarrollo o producción
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const app = require('./server');
require('./database');

// Empezar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server en el puerto ${app.get('port')}`);
})