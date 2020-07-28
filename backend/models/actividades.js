const { Sequelize } = require('sequelize');
const { sequelize } = require('../database');

const TMAETRACAL = sequelize.define('tmaetracal', {
    cod_trabajo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    mat_trabajo: {
        type: Sequelize.STRING
    },
    prof_trabajo: {
        type: Sequelize.STRING
    },
    act_trabajo: {
        type: Sequelize.STRING
    },
    des_trabajo: {
        type: Sequelize.STRING
    },
    fei_trabajo: {
        type: Sequelize.STRING
    },
    fec_trabajo: {
        type: Sequelize.STRING
    },
    cur_trabajo: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = TMAETRACAL;