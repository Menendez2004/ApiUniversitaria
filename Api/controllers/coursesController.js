const db = require('../db/database');
const Course = require('../models/courseModel');

// Obtener todas las carreras
const getAllCourses = (req, res) => {
    Course.getAllCourses((err, courses) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener las carreras' });
        } else {
            res.status(200).json(courses);
        }
    });
};

// Obtener una carrera por ID
const getCourseById = (req, res) => {
    const courseId = req.params.id;
    
    Course.getCourseById(courseId, (err, course) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener la carrera' });
        } else {
            if (!course) {
                res.status(404).json({ error: 'Carrera no encontrada' });
            } else {
                res.status(200).json(course);
            }
        }
    });
};

// Crear una nueva carrera
const createCourse = (req, res) => {
    const { name, description } = req.body;

    // Comprueba si se proporciona el nombre y la descripción de la carrera
    if (!name || !description) {
        return res.status(400).json({ error: 'El nombre y la descripción de la carrera son obligatorios' });
    }

    // Crea la nueva carrera en la base de datos
    Course.createCourse({ name, description }, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear la carrera' });
        } else {
            res.status(201).json({ message: 'Carrera creada exitosamente', id: result.insertId });
        }
    });
};

// Actualizar una carrera por ID
const updateCourse = (req, res) => {
    const courseId = req.params.id;
    const updatedData = req.body;

    Course.updateCourse(courseId, updatedData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al actualizar la carrera' });
        } else {
            res.status(200).json({ message: 'Carrera actualizada exitosamente' });
        }
    });
};

// Eliminar una carrera por ID
const deleteCourse = (req, res) => {
    const courseId = req.params.id;

    Course.deleteCourse(courseId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar la carrera' });
        } else {
            res.status(200).json({ message: 'Carrera eliminada exitosamente' });
        }
    });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
