require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');
const UI = require('../UI');

// Expresión regulara para validar
const expresion = /^[a-zA-Z\u00E0\u00FC\d\_\-\s]{5,25}$/;

let campo = false;

// Función que valida el campo de nombre del trabajo o actividad
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

// Evento de presionar una tecla y ejecuta la función de validación
document.getElementById('TxtTarea').addEventListener('keyup', validarForm);
// Evento de click fuera del campo y ejecuta la función de validación
document.getElementById('TxtTarea').addEventListener('blur', validarForm);

//======================================================================================
// DOM REGISTRAR
//======================================================================================
// Botón Enviar 
document.getElementById('ForRegistro')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(campo)
        if (campo) {
            const TxtTarea = document.getElementById('TxtTarea').value.toUpperCase();
            const TxtDescripcion = document.getElementById('TxtDescripcion').value.toUpperCase();
            const OptMateria = document.getElementById('OptMateria').value;
            const OptCurso = document.getElementById('OptCurso').value;
            const OptDocente = document.getElementById('OptDocente').value;
            const TxtFechaInicio = document.getElementById('TxtFechaInicio').value;
            const TxtFechaFin = document.getElementById('TxtFechaFin').value;

            const data = {
                "mat_trabajo": OptMateria,
                "prof_trabajo": OptDocente,
                "act_trabajo": TxtTarea,
                "des_trabajo": TxtDescripcion,
                "fei_trabajo": TxtFechaInicio,
                "fec_trabajo": TxtFechaFin,
                "cur_trabajo": OptCurso
            }

            const ui = new UI();
            ui.addTrabajos(data);
        } else {
            const ui = new UI();
            ui.renderMessage('Campos no válidos', 'danger');
        }
    });

// Botón Borrar
document.getElementById('btnBorrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormIngreso();
    });