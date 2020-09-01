const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const TMAETRACAL = sequelize.define('tmaetracal', {
    cod_trabajo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    mat_trabajo: {
        type: DataTypes.STRING
    },
    prof_trabajo: {
        type: DataTypes.STRING
    },
    act_trabajo: {
        type: DataTypes.STRING
    },
    des_trabajo: {
        type: DataTypes.STRING
    },
    fei_trabajo: {
        type: DataTypes.STRING
    },
    fec_trabajo: {
        type: DataTypes.STRING
    },
    cur_trabajo: {
        type: DataTypes.STRING
    },
    rowguid: {
        type: 'UNIQUEIDENTIFIER',
        defaultValue: DataTypes.UUIDV4
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = TMAETRACAL;