require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

const UI = require('../UI');

const expresion = /^[a-zA-Z0-9\_\-\s]{5,25}$/;
let campo = false;

const validarForm = (e) => {
    if (e.target.id === 'tarea') {
        if (expresion.test(e.target.value)) {
            document.getElementById('tarea').classList.remove('border-incorrecto');
            document.getElementById('messageTarea').classList.remove('d-block');
            campo = true;
        } else {
            document.getElementById('tarea').classList.add('border-incorrecto');
            document.getElementById('messageTarea').classList.add('d-block');
            campo = false;
        }
    };
}

document.getElementById('tarea').addEventListener('keyup', validarForm);
document.getElementById('tarea').addEventListener('blur', validarForm);

//======================================================================================
// DOM EDICIÓN
//======================================================================================
// Botón Buscar
document.getElementById('consultaEdi-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();

        document.getElementById('guardar').removeAttribute('disabled');
        let codigo = document.getElementById('codigo').value;
        codigo = parseInt(codigo);

        const ui = new UI();
        ui.renderTrabajoById(codigo);
    });

// Botón Guardar
document.getElementById('edicion-form')
    .addEventListener('submit', async(e) => {
        e.preventDefault();

        if (campo) {
            let codigo = document.getElementById('codigo').value;
            codigo = parseInt(codigo);
            const tarea = document.getElementById('tarea').value.toUpperCase();
            const descripcion = document.getElementById('descripcion').value.toUpperCase();
            const materia = document.getElementById('materia').value;
            const curso = document.getElementById('curso').value;
            const docente = document.getElementById('docente').value;
            const fInicio = document.getElementById('fInicio').value;
            const fFin = document.getElementById('fFin').value;

            const data = {
                "cod_trabajo": codigo,
                "mat_trabajo": materia,
                "prof_trabajo": docente,
                "act_trabajo": tarea,
                "des_trabajo": descripcion,
                "fei_trabajo": fInicio,
                "fec_trabajo": fFin,
                "cur_trabajo": curso
            }

            const ui = new UI();
            await ui.updateTrabajos(data);
            document.getElementById('guardar').setAttribute('disabled', 'true');
        } else {
            const ui = new UI();
            ui.renderMessage('Debe editar un campo, y que este sean válidos', 'danger');
        }
    });

// Botón Borrar
document.getElementById('borrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormEditar();
        document.getElementById('guardar').setAttribute('disabled', 'true');
    });