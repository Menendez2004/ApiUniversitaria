const db = require('../db/database');

const Subject = {};

Subject.getAllSubjects = (callback) => {
    const query = 'SELECT * FROM subjects';
    db.query(query, (err, subjects) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, subjects);
    });
};

Subject.getSubjectById = (id, callback) => {
    const query = 'SELECT * FROM subjects WHERE id = ?';
    db.query(query, [id], (err, subject) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (subject.length === 0) {
            callback(null, null);
            return;
        }
        callback(null, subject[0]);
    });
};

Subject.createSubject = (subject, callback) => {
    const { name, description } = subject;
    const query = 'INSERT INTO subjects (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Subject.updateSubject = (id, updatedData, callback) => {
    const query = 'UPDATE subjects SET ? WHERE id = ?';
    db.query(query, [updatedData, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Subject.deleteSubject = (id, callback) => {
    const query = 'DELETE FROM subjects WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
};

module.exports = Subject;
