const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupo.controller');
const Grupo = require('../models/grupo.model'); // Add this line

router.post('/', grupoController.createGrupo);
router.post('/assign', grupoController.assignEstudianteToGrupo);
router.get('/', grupoController.getGrupos);
module.exports = router;
