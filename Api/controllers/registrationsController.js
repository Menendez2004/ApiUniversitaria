const db = require('../db/database');
const Registration = require('../models/registrationModel');

// Crear una nueva inscripción
const createRegistration = (req, res) => {
    const { alumno_id, materia_id, carrera_id, fecha_inscripcion } = req.body;

    // Comprueba si se proporcionan alumno_id, materia_id, carrera_id y fecha_inscripcion
    if (!alumno_id || !materia_id || !carrera_id || !fecha_inscripcion) {
        return res.status(400).json({ error: 'alumno_id, materia_id, carrera_id y fecha_inscripcion son obligatorios' });
    }

    // Crea la nueva inscripción en la base de datos
    Registration.createRegistration({ alumno_id, materia_id, carrera_id, fecha_inscripcion }, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear la inscripción' });
        } else {
            res.status(201).json({ message: 'Inscripción creada exitosamente', id: result.insertId });
        }
    });
};

// Eliminar una inscripción por ID
const deleteRegistration = (req, res) => {
    const registrationId = req.params.id;

    Registration.deleteRegistration(registrationId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar la inscripción' });
        } else {
            res.status(200).json({ message: 'Inscripción eliminada exitosamente' });
        }
    });
};

module.exports = {
    createRegistration,
    deleteRegistration,
};
