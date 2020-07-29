class TrabajoService {
    constructor() {
        this.URI = '/api/trabajos';
    }

    // Método para acceder a la API REST del backend y obtener todos los datos
    async getTrabajo() {
        const res = await fetch(this.URI);
        const trabajos = await res.json();
        return trabajos;
    }

    // Método para acceder a la API REST del backend y obtener un sólo los datos, recibe como parámetro el código de la tarea (id)
    async getTrabajoOne(trabajoId) {
        const res = await fetch(`${this.URI}/${trabajoId}`);
        const trabajos = await res.json();
        return trabajos
    }

    // Método para acceder a la API REST del backend y enviar un nuevo dato
    async postTrabajo(trabajo) {
        const data = JSON.stringify(trabajo);
        const res = await fetch(this.URI, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data
        });
        const trabajos = await res.json();
        return trabajos.message.toUpperCase();
    }

    // Método para acceder a la API REST del backend y actualizar un dato
    async putTrabajo(trabajo) {
        const data = JSON.stringify(trabajo);
        const res = await fetch(this.URI, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: data
        });
        const trabajos = await res.json();
        return trabajos.message.toUpperCase();
    }

    // Método para acceder a la API REST del backend y eliminar un dato, recibe como parámetro el código de la tarea (id)
    async deleteTrabajo(trabajoId) {
        const res = await fetch(`${this.URI}/${trabajoId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const trabajos = await res.json();
        return trabajos.message.toUpperCase();
    }
}

module.exports = TrabajoService;