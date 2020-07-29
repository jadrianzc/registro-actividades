require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

const UI = require('../UI');

const expresion = /^[a-zA-Z\u00E0\u00FC\d\_\-\s]{5,25}$/;
let campo = false;

const validarForm = (e) => {
    if (e.target.id === 'TxtTarea') {
        if (expresion.test(e.target.value)) {
            document.getElementById('TxtTarea').classList.remove('border-incorrecto');
            document.getElementById('messageTarea').classList.remove('d-block');
            campo = true;
        } else {
            document.getElementById('TxtTarea').classList.add('border-incorrecto');
            document.getElementById('messageTarea').classList.add('d-block');
            campo = false;
        }
    };
}

document.getElementById('TxtTarea').addEventListener('keyup', validarForm);
document.getElementById('TxtTarea').addEventListener('blur', validarForm);

//======================================================================================
// DOM EDICIÓN
//======================================================================================
// Botón Buscar
document.getElementById('ForConsultaId')
    .addEventListener('submit', (e) => {
        e.preventDefault();

        document.getElementById('btnGuardar').removeAttribute('disabled');
        let TxtCodigo = document.getElementById('TxtCodigo').value;
        TxtCodigo = parseInt(TxtCodigo);

        const ui = new UI();
        ui.renderTrabajoById(TxtCodigo);
    });

// Botón Guardar
document.getElementById('ForEditar')
    .addEventListener('submit', async(e) => {
        e.preventDefault();

        if (campo) {
            let TxtCodigo = document.getElementById('TxtCodigo').value;
            TxtCodigo = parseInt(TxtCodigo);
            const TxtTarea = document.getElementById('TxtTarea').value.toUpperCase();
            const TxtDescripción = document.getElementById('TxtDescripción').value.toUpperCase();
            const OptMateria = document.getElementById('OptMateria').value;
            const OptCurso = document.getElementById('OptCurso').value;
            const OptDocente = document.getElementById('OptDocente').value;
            const TxtFechaInicio = document.getElementById('TxtFechaInicio').value;
            const TxtFechaFin = document.getElementById('TxtFechaFin').value;

            const data = {
                "cod_trabajo": TxtCodigo,
                "mat_trabajo": OptMateria,
                "prof_trabajo": OptDocente,
                "act_trabajo": TxtTarea,
                "des_trabajo": TxtDescripción,
                "fei_trabajo": TxtFechaInicio,
                "fec_trabajo": TxtFechaFin,
                "cur_trabajo": OptCurso
            }

            const ui = new UI();
            await ui.updateTrabajos(data);
            document.getElementById('btnGuardar').setAttribute('disabled', 'true');
        } else {
            const ui = new UI();
            ui.renderMessage('Debe editar un campo, y que este sean válidos', 'danger');
        }
    });

// Botón Borrar
document.getElementById('btnBorrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormEditar();
        document.getElementById('btnGuardar').setAttribute('disabled', 'true');
    });