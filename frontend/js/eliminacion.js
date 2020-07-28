require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

const UI = require('../UI');

//======================================================================================
// DOM ELIMINACIÓN
//======================================================================================
// Botón Consultar
document.getElementById('eliminar-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();

        const codigo = document.getElementById('codigo').value;
        const materia = document.getElementById('materia').value;
        const curso = document.getElementById('curso').value;
        const docente = document.getElementById('profesor').value;

        if (!codigo && materia === 'Materia' && curso === 'Curso' && docente === 'Docente') {
            const ui = new UI();
            ui.renderMessage('Seleccione un método de búsqueda', 'primary');
        }

        const data = {
            "cod_trabajo": parseInt(codigo),
            "mat_trabajo": materia,
            "cur_trabajo": curso,
            "prof_trabajo": docente,
        }

        const ui = new UI();
        ui.renderTrabajosDelete(data);
    });

// Botón Borrar
document.getElementById('borrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormEliminar();
    });

// EVENTO PARA ELIMINAR
document.getElementById('table')
    .addEventListener('click', async(e) => {
        e.preventDefault();

        if (e.target.classList.contains('delete')) {
            const codTrabajo = e.target.getAttribute('cod_trabajo');
            const cod_trabajo = parseInt(codTrabajo);

            const codigo = document.getElementById('codigo').value;
            const materia = document.getElementById('materia').value;
            const curso = document.getElementById('curso').value;
            const docente = document.getElementById('profesor').value;

            const data = {
                "cod_trabajo": parseInt(codigo),
                "mat_trabajo": materia,
                "cur_trabajo": curso,
                "prof_trabajo": docente,
            }

            const ui = new UI();
            await ui.deleteTrabajos(cod_trabajo);
            ui.renderTrabajosDelete(data);
        }
    });