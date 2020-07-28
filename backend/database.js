const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false
})

sequelize.authenticate()
    .then(() => console.log('Conexión establecida'))
    .catch((err) => console.error('Ha ocurrido un error al conectar a la base de datos:', err));

module.exports = { sequelize };