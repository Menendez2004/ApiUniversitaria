const db = require('../db/database');
const Prerequisite = require('../models/prerequisiteModel');

// Obtener todos los prerrequisitos
const getAllPrerequisites = (req, res) => {
    Prerequisite.getAllPrerequisites((err, prerequisites) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los prerrequisitos' });
        } else {
            res.status(200).json(prerequisites);
        }
    });
};

// Obtener un prerrequisito por ID
const getPrerequisiteById = (req, res) => {
    const prerequisiteId = req.params.id;

    Prerequisite.getPrerequisiteById(prerequisiteId, (err, prerequisite) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener el prerrequisito' });
        } else {
            if (!prerequisite) {
                res.status(404).json({ error: 'Prerrequisito no encontrado' });
            } else {
                res.status(200).json(prerequisite);
            }
        }
    });
};

// Crear un nuevo prerrequisito
const createPrerequisite = (req, res) => {
    const { subject_id, prerequisite_id } = req.body;

    // Comprueba si se proporcionan subject_id y prerequisite_id
    if (!subject_id || !prerequisite_id) {
        return res.status(400).json({ error: 'subject_id y prerequisite_id son obligatorios' });
    }

    // Crea el nuevo prerrequisito en la base de datos
    Prerequisite.createPrerequisite({ subject_id, prerequisite_id }, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear el prerrequisito' });
        } else {
            res.status(201).json({ message: 'Prerrequisito creado exitosamente', id: result.insertId });
        }
    });
};

// Actualizar un prerrequisito por ID
const updatePrerequisite = (req, res) => {
    const prerequisiteId = req.params.id;
    const updatedData = req.body;

    Prerequisite.updatePrerequisite(prerequisiteId, updatedData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al actualizar el prerrequisito' });
        } else {
            res.status(200).json({ message: 'Prerrequisito actualizado exitosamente' });
        }
    });
};

// Eliminar un prerrequisito por ID
const deletePrerequisite = (req, res) => {
    const prerequisiteId = req.params.id;

    Prerequisite.deletePrerequisite(prerequisiteId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar el prerrequisito' });
        } else {
            res.status(200).json({ message: 'Prerrequisito eliminado exitosamente' });
        }
    });
};

module.exports = {
    getAllPrerequisites,
    getPrerequisiteById,
    createPrerequisite,
    updatePrerequisite,
    deletePrerequisite,
};
