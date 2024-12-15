const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiante.controller');

router.get('/', estudianteController.getEstudiantes);
router.post('/', estudianteController.createEstudiante);
router.get('/:id', estudianteController.getEstudianteById);
router.delete( '/:id', estudianteController.deleteEstudianteById);
router.put('/:id', estudianteController.updateEstudianteById);

// Añadir el resto de routas...

module.exports = router;