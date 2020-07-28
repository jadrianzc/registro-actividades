const TrabajoService = require('./service/service');
const trabajoService = new TrabajoService();

class UI {
    async renderTrabajos(data) {
        const tareas = await trabajoService.getTrabajo();
        const trabajos = tareas.data

        const tasks = [];
        trabajos.forEach(trabajo => {
            if (trabajo.cod_trabajo === data.cod_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.mat_trabajo === data.mat_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.cur_trabajo === data.cur_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.prof_trabajo === data.prof_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
        });

        const tbody = document.querySelector('#table .tbody');
        tbody.innerHTML = '';
        tasks.forEach(task => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <th>${task.cod_trabajo}</th>
                    <td>${task.mat_trabajo}</td>
                    <td>${task.prof_trabajo}</td>
                    <td>${task.act_trabajo}</td>
                    <td>${task.des_trabajo}</td>
                    <td>${task.fei_trabajo}</td>
                    <td>${task.fec_trabajo}</td>
                    <td>${task.cur_trabajo}</td>
            `;
            tbody.appendChild(tr);
        })
    }

    async renderTrabajosDelete(data) {
        const tareas = await trabajoService.getTrabajo();
        const trabajos = tareas.data

        const tasks = [];
        trabajos.forEach(trabajo => {
            if (trabajo.cod_trabajo === data.cod_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.mat_trabajo === data.mat_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.cur_trabajo === data.cur_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
            if (trabajo.prof_trabajo === data.prof_trabajo) {
                if (tasks.indexOf(trabajo) === -1) {
                    tasks.push(trabajo);
                }
            }
        });

        const tbody = document.querySelector('#table .tbody');
        tbody.innerHTML = '';
        tasks.forEach(task => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <th>${task.cod_trabajo}</th>
                    <td>${task.mat_trabajo}</td>
                    <td>${task.prof_trabajo}</td>
                    <td>${task.act_trabajo}</td>
                    <td>${task.des_trabajo}</td>
                    <td>${task.fei_trabajo}</td>
                    <td>${task.fec_trabajo}</td>
                    <td>${task.cur_trabajo}</td>
                    <td><a href="#" class="btn btn-danger delete" cod_trabajo=${task.cod_trabajo}>X</a></td>
            `;
            tbody.appendChild(tr);
        })
    }

    async renderTrabajoById(codigo) {
        const tareas = await trabajoService.getTrabajoOne(codigo);
        const trabajos = tareas.data
        console.log(trabajos)

        const tarea = document.getElementById('tarea');
        const descripcion = document.getElementById('descripcion');
        const materia = document.getElementById('materia');
        const curso = document.getElementById('curso');
        const docente = document.getElementById('docente');
        const fInicio = document.getElementById('fInicio');
        const fFin = document.getElementById('fFin');

        if (!trabajos) {
            this.renderMessage('El código ingresado no es correcto', 'danger');
            this.clearFormEditar();
            document.getElementById('guardar').setAttribute('disabled', 'true');
        } else if (trabajos.cod_trabajo === codigo) {
            tarea.value = trabajos.act_trabajo;
            descripcion.value = trabajos.des_trabajo;
            materia.value = trabajos.mat_trabajo;
            curso.value = trabajos.cur_trabajo;
            docente.value = trabajos.prof_trabajo;
            fInicio.value = trabajos.fei_trabajo;
            fFin.value = trabajos.fec_trabajo;
        }
    }

    async addTrabajos(trabajo) {
        const message = await trabajoService.postTrabajo(trabajo);
        if (message === 'Actividad creada'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
        this.clearFormIngreso();
    }

    async updateTrabajos(data) {
        const message = await trabajoService.putTrabajo(data);
        if (message === 'Datos actualizados'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
        this.clearFormEditar();
    }

    async deleteTrabajos(cod_trabajo) {
        const message = await trabajoService.deleteTrabajo(cod_trabajo);
        if (message === 'Dato eliminado'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
    }

    renderMessage(message, colorMessage) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message text-center`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.main-container');
        const form = document.querySelector('.main-form');

        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.message').remove();
        }, 3000)
    }

    clearFormIngreso() {
        document.getElementById('actividad-form').reset();
    }

    clearFormConsultar() {
        document.getElementById('consulta-form').reset();
    }

    clearFormEditar() {
        document.getElementById('consultaEdi-form').reset();
        document.getElementById('edicion-form').reset();
    }

    clearFormEliminar() {
        document.getElementById('eliminar-form').reset();
    }
}

module.exports = UI;