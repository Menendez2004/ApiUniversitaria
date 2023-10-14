const db = require('../db/database');

const Registration = {};

Registration.createRegistration = (registration, callback) => {
    const { alumno_id, materia_id, carrera_id, fecha_inscripcion } = registration;
    const query = 'INSERT INTO registrations (alumno_id, materia_id, carrera_id, fecha_inscripcion) VALUES (?, ?, ?, ?)';
    db.query(query, [alumno_id, materia_id, carrera_id, fecha_inscripcion], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Registration.deleteRegistration = (registrationId, callback) => {
    const query = 'DELETE FROM registrations WHERE id = ?';
    db.query(query, [registrationId], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

module.exports = Registration;
