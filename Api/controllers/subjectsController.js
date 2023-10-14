const db = require('../db/database');
const Subject = require('../models/subjectModel');

// Obtener todas las materias
const getAllSubjects = (req, res) => {
    Subject.getAllSubjects((err, subjects) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener las materias' });
        } else {
            res.status(200).json(subjects);
        }
    });
};

// Obtener una materia por ID
const getSubjectById = (req, res) => {
    const subjectId = req.params.id;

    Subject.getSubjectById(subjectId, (err, subject) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener la materia' });
        } else {
            if (!subject) {
                res.status(404).json({ error: 'Materia no encontrada' });
            } else {
                res.status(200).json(subject);
            }
        }
    });
};

// Crear una nueva materia
const createSubject = (req, res) => {
    const { name, description } = req.body;

    // Comprueba si se proporciona el nombre y la descripción de la materia
    if (!name || !description) {
        return res.status(400).json({ error: 'El nombre y la descripción de la materia son obligatorios' });
    }

    // Crea la nueva materia en la base de datos
    Subject.createSubject({ name, description }, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear la materia' });
        } else {
            res.status(201).json({ message: 'Materia creada exitosamente', id: result.insertId });
        }
    });
};

// Actualizar una materia por ID
const updateSubject = (req, res) => {
    const subjectId = req.params.id;
    const updatedData = req.body;

    Subject.updateSubject(subjectId, updatedData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al actualizar la materia' });
        } else {
            res.status(200).json({ message: 'Materia actualizada exitosamente' });
        }
    });
};

// Eliminar una materia por ID
const deleteSubject = (req, res) => {
    const subjectId = req.params.id;

    Subject.deleteSubject(subjectId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar la materia' });
        } else {
            res.status(200).json({ message: 'Materia eliminada exitosamente' });
        }
    });
};

module.exports = {
    getAllSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject,
};
