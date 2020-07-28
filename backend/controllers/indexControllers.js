const indexCtrl = {};
const TMAETRACAL = require('../models/actividades');

// Renderiza ruta inicial
indexCtrl.getTrabajo = async(req, res) => {
    try {
        const data = await TMAETRACAL.findAll();
        if (data) {
            return res.json({
                data: data
            });
        } else {
            throw Error;
        }
    } catch (e) {
        return res.status(400).json({
            message: 'No se encontraron datos',
            data: {}
        })
    }
};

indexCtrl.getTrabajoOne = async(req, res) => {
    try {
        const data = await TMAETRACAL.findOne({
            where: {
                cod_trabajo: req.params.id
            }
        });
        if (data) {
            return res.json({
                data: data
            });
        } else {
            throw Error;
        }
    } catch (e) {
        return res.status(500).json({
            message: 'No se encontraron datos',
        });
    }
}

indexCtrl.createTrabajo = async(req, res) => {
    const { mat_trabajo, prof_trabajo, act_trabajo, des_trabajo, fei_trabajo, fec_trabajo, cur_trabajo } = req.body;

    try {
        const data = await TMAETRACAL.create({
            mat_trabajo,
            prof_trabajo,
            act_trabajo,
            des_trabajo,
            fei_trabajo,
            fec_trabajo,
            cur_trabajo
        }, {
            fields: ['mat_trabajo', 'prof_trabajo', 'act_trabajo', 'des_trabajo', 'fei_trabajo', 'fec_trabajo', 'cur_trabajo']
        })
        if (data) {
            return res.json({
                message: 'Actividad creada',
                data: data
            });
        } else {
            throw Error;
        }
    } catch (e) {
        return res.status(500).json({
            message: 'Actividad no creada',
            data: {}
        });
    }
}

indexCtrl.deleteTrabajo = async(req, res) => {
    try {
        const data = await TMAETRACAL.destroy({
            where: {
                cod_trabajo: req.params.id
            }
        });
        if (data) {
            return res.json({
                message: 'Dato eliminado',
                count: data
            });
        } else {
            throw Error;
        }
    } catch (e) {
        return res.status(500).json({
            message: 'No se eliminó el dato',
        });
    }
}

indexCtrl.updateTrabajo = async(req, res) => {
    const { cod_trabajo, mat_trabajo, prof_trabajo, act_trabajo, des_trabajo, fei_trabajo, fec_trabajo, cur_trabajo } = req.body;

    try {
        const data = await TMAETRACAL.findOne({
            attributes: ['cod_trabajo', 'mat_trabajo', 'prof_trabajo', 'act_trabajo', 'des_trabajo', 'fei_trabajo', 'fec_trabajo', 'cur_trabajo'],
            where: {
                cod_trabajo: cod_trabajo
            }
        });

        if (data) {
            await data.update({
                mat_trabajo,
                prof_trabajo,
                act_trabajo,
                des_trabajo,
                fei_trabajo,
                fec_trabajo,
                cur_trabajo
            });

            return res.json({
                message: 'Datos actualizados',
                data: data
            });
        } else {
            throw Error;
        }
    } catch (e) {
        return res.status(400).json({
            message: 'No se actualizaron los datos',
        });
    }
}

module.exports = indexCtrl;