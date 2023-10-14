const db = require('../db/database');

const Prerequisite = {};

Prerequisite.getAllPrerequisites = (callback) => {
    const query = 'SELECT * FROM prerequisites';
    db.query(query, (err, prerequisites) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, prerequisites);
    });
};

Prerequisite.getPrerequisiteById = (id, callback) => {
    const query = 'SELECT * FROM prerequisites WHERE id = ?';
    db.query(query, [id], (err, prerequisite) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (prerequisite.length === 0) {
            callback(null, null);
            return;
        }
        callback(null, prerequisite[0]);
    });
};

Prerequisite.createPrerequisite = (prerequisite, callback) => {
    const { subject_id, prerequisite_id } = prerequisite;
    const query = 'INSERT INTO prerequisites (subject_id, prerequisite_id) VALUES (?, ?)';
    db.query(query, [subject_id, prerequisite_id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Prerequisite.updatePrerequisite = (id, updatedData, callback) => {
    const query = 'UPDATE prerequisites SET ? WHERE id = ?';
    db.query(query, [updatedData, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Prerequisite.deletePrerequisite = (id, callback) => {
    const query = 'DELETE FROM prerequisites WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
};

module.exports = Prerequisite;
