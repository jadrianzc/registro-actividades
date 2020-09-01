const Sequelize = require('sequelize');

// Iniciando la conexión a la base de datos por medio de variables de entorno
/* const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false
}) */

const sequelize = new Sequelize('registroNotas', 'sa', 'jazc99', {
    host: 'JAZC003',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true,
        instanceName: 'SQL_WAKANDA',
        trustedConnection: true
    }
  });

// Validación si se ha realizado la conexión correctamente
sequelize.authenticate()
    .then(() => console.log('Conexión establecida'))
    .catch((err) => console.error('Ha ocurrido un error al conectar a la base de datos:', err));

module.exports = { sequelize };