require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

const UI = require('../UI');

//======================================================================================
// DOM ELIMINACIÓN
//======================================================================================
// Botón Consultar
document.getElementById('ForEliminar')
    .addEventListener('submit', (e) => {
        e.preventDefault();

        const TxtCodigo = document.getElementById('TxtCodigo').value;
        const OptMateria = document.getElementById('OptMateria').value;
        const OptCurso = document.getElementById('OptCurso').value;
        const OptDocente = document.getElementById('OptDocente').value;

        if (!TxtCodigo && OptMateria === 'Materia' && OptCurso === 'Curso' && OptDocente === 'Docente') {
            const ui = new UI();
            ui.renderMessage('Seleccione un método de búsqueda', 'primary');
        }

        const data = {
            "cod_trabajo": parseInt(TxtCodigo),
            "mat_trabajo": OptMateria,
            "cur_trabajo": OptCurso,
            "prof_trabajo": OptDocente,
        }

        const ui = new UI();
        ui.renderTrabajosDelete(data);
    });

// Botón Borrar
document.getElementById('btnBorrar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const ui = new UI;
        ui.clearFormEliminar();
    });

// EVENTO PARA ELIMINAR
document.getElementById('TblDatos')
    .addEventListener('click', async(e) => {
        e.preventDefault();

        if (e.target.classList.contains('delete')) {
            const codTrabajo = e.target.getAttribute('cod_trabajo');
            const cod_trabajo = parseInt(codTrabajo);

            const TxtCodigo = document.getElementById('TxtCodigo').value;
            const OptMateria = document.getElementById('OptMateria').value;
            const OptCurso = document.getElementById('OptCurso').value;
            const OptDocente = document.getElementById('OptDocente').value;

            const data = {
                "cod_trabajo": parseInt(TxtCodigo),
                "mat_trabajo": OptMateria,
                "cur_trabajo": OptCurso,
                "prof_trabajo": OptDocente,
            }

            const ui = new UI();
            await ui.deleteTrabajos(cod_trabajo);
            ui.renderTrabajosDelete(data);
        }
    });