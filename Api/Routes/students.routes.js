const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// Rutas para Estudiantes (Students)
router.get('/students/getAll', studentsController.getAllStudents);
router.get('/students/:id/getOne', studentsController.getStudentById);
router.post('/students/create', studentsController.createStudent);
router.put('/students/:id/update', studentsController.updateStudent);
router.delete('/students/:id/delete', studentsController.deleteStudent);

module.exports = router;