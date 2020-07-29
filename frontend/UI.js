const TrabajoService = require('./service/service');
const trabajoService = new TrabajoService();

class UI {

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de crear un elemento para agregarlo a una tabla
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

        const tbody = document.querySelector('#TblDatos .tbody');
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

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de eliminar un elemento de la tabla
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

        const tbody = document.querySelector('#TblDatos .tbody');
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

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de obtener un elemento y poder mostrarlo para que el usuario lo pueda editar
    async renderTrabajoById(TxtCodigo) {
        const tareas = await trabajoService.getTrabajoOne(TxtCodigo);
        const trabajos = tareas.data

        const TxtTarea = document.getElementById('TxtTarea');
        const TxtDescripción = document.getElementById('TxtDescripción');
        const OptMateria = document.getElementById('OptMateria');
        const OptCurso = document.getElementById('OptCurso');
        const OptDocente = document.getElementById('OptDocente');
        const TxtFechaInicio = document.getElementById('TxtFechaInicio');
        const TxtFechaFin = document.getElementById('TxtFechaFin');

        if (!trabajos) {
            this.renderMessage('El código ingresado no es correcto', 'danger');
            this.clearFormEditar();
            document.getElementById('guardar').setAttribute('disabled', 'true');
        } else if (trabajos.cod_trabajo === TxtCodigo) {
            TxtTarea.value = trabajos.act_trabajo;
            TxtDescripción.value = trabajos.des_trabajo;
            OptMateria.value = trabajos.mat_trabajo;
            OptCurso.value = trabajos.cur_trabajo;
            OptDocente.value = trabajos.prof_trabajo;
            TxtFechaInicio.value = trabajos.fei_trabajo;
            TxtFechaFin.value = trabajos.fec_trabajo;
        }
    }

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de agregar un elemento
    async addTrabajos(data) {
        const message = await trabajoService.postTrabajo(data);
        if (message === 'Actividad creada'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
        this.clearFormIngreso();
    }

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de actualizar un elemento
    async updateTrabajos(data) {
        const message = await trabajoService.putTrabajo(data);
        if (message === 'Datos actualizados'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
        this.clearFormEditar();
    }

    // Método que ejecuta el método para obtener los datos de la clase TrabajoService 
    // Con el fin de eliminar un elemento
    async deleteTrabajos(cod_trabajo) {
        const message = await trabajoService.deleteTrabajo(cod_trabajo);
        if (message === 'Dato eliminado'.toUpperCase()) {
            this.renderMessage(message, 'success');
        } else {
            this.renderMessage(message, 'danger');
        }
    }

    // Método para renderizar un mensaje al usuario al momento de hacer una acción
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

    // Método para limpiar el formulario de Registro
    clearFormIngreso() {
        document.getElementById('ForRegistro').reset();
    }

    // Método para limpiar el formulario de Consulta
    clearFormConsultar() {
        document.getElementById('ForConsultar').reset();
    }

    // Método para limpiar el formulario de Edición
    clearFormEditar() {
        document.getElementById('ForConsultaId').reset();
        document.getElementById('ForEditar').reset();
    }

    // Método para limpiar el formulario de Eliminación
    clearFormEliminar() {
        document.getElementById('ForEliminar').reset();
    }
}

module.exports = UI;