class TrabajoService {
    constructor() {
        this.URI = '/api/trabajos';
    }

    async getTrabajo() {
        const res = await fetch(this.URI);
        const trabajos = await res.json();
        return trabajos;
    }

    async getTrabajoOne(trabajoId) {
        const res = await fetch(`${this.URI}/${trabajoId}`);
        const trabajos = await res.json();
        return trabajos
    }

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