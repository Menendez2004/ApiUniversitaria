const express = require('express');
const router = express.Router();
const subjectsController = require('../controllers/subjectsController');


// Rutas para Materias (Subjects)
router.get('/subjects', subjectsController.getAllSubjects);
router.get('/subjects/:id', subjectsController.getSubjectById);
router.post('/subjects', subjectsController.createSubject);
router.put('/subjects/:id', subjectsController.updateSubject);
router.delete('/subjects/:id', subjectsController.deleteSubject);

module.exports = router;