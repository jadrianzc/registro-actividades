require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

const UI = require('../UI');

//======================================================================================
// DOM CONSULTA
//======================================================================================
// Botón Consultar
document.getElementById('consulta-form')
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
        ui.renderTrabajos(data);
    });

// Botón Borrar
document.getElementById('borrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormConsultar();
    });