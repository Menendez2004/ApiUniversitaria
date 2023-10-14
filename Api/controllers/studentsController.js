const db = require('../db/database');
const Student = require('../models/studentModel');

// Obtener todos los estudiantes
const getAllStudents = (req, res) => {
    Student.getAllStudents((err, students) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los estudiantes' });
        } else {
            res.status(200).json(students);
        }
    });
};

// Obtener un estudiante por ID
const getStudentById = (req, res) => {
    const studentId = req.params.id;

    Student.getStudentById(studentId, (err, student) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener el estudiante' });
        } else {
            if (!student) {
                res.status(404).json({ error: 'Estudiante no encontrado' });
            } else {
                res.status(200).json(student);
            }
        }
    });
};

// Crear un nuevo estudiante
const createStudent = (req, res) => {
    const { name, enrollment_date, career_id } = req.body;

    // Comprueba si se proporciona el nombre, la fecha de inscripción y la carrera del estudiante
    if (!name || !enrollment_date || !career_id) {
        return res.status(400).json({ error: 'El nombre, la fecha de inscripción y la carrera del estudiante son obligatorios' });
    }

    // Crea el nuevo estudiante en la base de datos
    Student.createStudent({ name, enrollment_date, career_id }, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear el estudiante' });
        } else {
            res.status(201).json({ message: 'Estudiante creado exitosamente', id: result.insertId });
        }
    });
};

// Actualizar un estudiante por ID
const updateStudent = (req, res) => {
    const studentId = req.params.id;
    const updatedData = req.body;

    Student.updateStudent(studentId, updatedData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al actualizar el estudiante' });
        } else {
            res.status(200).json({ message: 'Estudiante actualizado exitosamente' });
        }
    });
};

// Eliminar un estudiante por ID
const deleteStudent = (req, res) => {
    const studentId = req.params.id;

    Student.deleteStudent(studentId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar el estudiante' });
        } else {
            res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
        }
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
