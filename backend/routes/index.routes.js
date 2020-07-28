const { Router } = require('express');
const { getTrabajo, createTrabajo, getTrabajoOne, deleteTrabajo, updateTrabajo } = require('../controllers/indexControllers');
const router = Router();

// Petición la ruta API REST para mostrar los datos
router.get('/', getTrabajo);
router.get('/:id', getTrabajoOne);
// Petición POST a la ruta API REST para guardar un nuevo dato
router.post('/', createTrabajo);
// Petición PUT a la ruta API REST para actualizar
router.put('/', updateTrabajo);
// Petición DELETE a la ruta API REST para actualizar
router.delete('/:id', deleteTrabajo);

module.exports = router;