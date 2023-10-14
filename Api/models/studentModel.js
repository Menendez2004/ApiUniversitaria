const db = require('../db/database');

const Student = {};

Student.getAllStudents = (callback) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, students) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, students);
    });
};

Student.getStudentById = (id, callback) => {
    const query = 'SELECT * FROM students WHERE id = ?';
    db.query(query, [id], (err, student) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (student.length === 0) {
            callback(null, null);
            return;
        }
        callback(null, student[0]);
    });
};

Student.createStudent = (student, callback) => {
    const { name, enrollment_date, career_id } = student;
    const query = 'INSERT INTO students (name, enrollment_date, career_id) VALUES (?, ?, ?)';
    db.query(query, [name, enrollment_date, career_id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Student.updateStudent = (id, updatedData, callback) => {
    const query = 'UPDATE students SET ? WHERE id = ?';
    db.query(query, [updatedData, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Student.deleteStudent = (id, callback) => {
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
};

module.exports = Student;
