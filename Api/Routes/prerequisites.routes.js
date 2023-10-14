const express = require('express');
const router = express.Router();
const prerequisitesController = require('../controllers/prerequisitesController');

// Rutas para Prerrequisitos (Prerequisites)
router.get('/prerequisites', prerequisitesController.getAllPrerequisites);
router.get('/prerequisites/:id', prerequisitesController.getPrerequisiteById);
router.post('/prerequisites', prerequisitesController.createPrerequisite);
router.put('/prerequisites/:id', prerequisitesController.updatePrerequisite);
router.delete('/prerequisites/:id', prerequisitesController.deletePrerequisite);

module.exports = router;