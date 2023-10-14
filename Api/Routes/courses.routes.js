const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

// Ruta para obtener todas las carreras
router.get('/api/courses/getAll', coursesController.getAllCourses);

// Ruta para obtener una carrera por ID
router.get('/api/courses/:id/getOne', coursesController.getCourseById);

// Ruta para crear una nueva carrera
router.post('/api/courses/create', coursesController.createCourse);

// Ruta para actualizar una carrera por ID
router.put('/api/courses/:id/update', coursesController.updateCourse);

// Ruta para eliminar una carrera por ID
router.delete('/api/courses/:id/delete', coursesController.deleteCourse);

module.exports = router;
