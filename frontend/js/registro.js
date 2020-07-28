require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');


const UI = require('../UI');

const expresion = /^[a-zA-Z\u00E0\u00FC\d\_\-\s]{5,25}$/;

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
// DOM INDEX
//======================================================================================
// Botón Enviar 
document.getElementById('actividad-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(campo)
        if (campo) {
            const tarea = document.getElementById('tarea').value.toUpperCase();
            const descripcion = document.getElementById('descripcion').value.toUpperCase();
            const materia = document.getElementById('materia').value;
            const curso = document.getElementById('curso').value;
            const docente = document.getElementById('docente').value;
            const fInicio = document.getElementById('fInicio').value;
            const fFin = document.getElementById('fFin').value;

            const data = {
                "mat_trabajo": materia,
                "prof_trabajo": docente,
                "act_trabajo": tarea,
                "des_trabajo": descripcion,
                "fei_trabajo": fInicio,
                "fec_trabajo": fFin,
                "cur_trabajo": curso
            }

            console.log(data)

            const ui = new UI();
            ui.addTrabajos(data);
        } else {
            const ui = new UI();
            ui.renderMessage('Campos no válidos', 'danger');
        }
    });

// Botón Borrar
document.getElementById('borrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormIngreso();
    });