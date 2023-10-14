const db = require('../db/database');

const Course = {};

Course.getAllCourses = (callback) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (err, courses) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, courses);
    });
};

Course.getCourseById = (id, callback) => {
    const query = 'SELECT * FROM courses WHERE id = ?';
    db.query(query, [id], (err, course) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (course.length === 0) {
            callback(null, null);
            return;
        }
        callback(null, course[0]);
    });
};

Course.createCourse = (course, callback) => {
    const { name, description } = course;
    const query = 'INSERT INTO courses (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Course.updateCourse = (id, updatedData, callback) => {
    const query = 'UPDATE courses SET ? WHERE id = ?';
    db.query(query, [updatedData, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

Course.deleteCourse = (id, callback) => {
    const query = 'DELETE FROM courses WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, result);
    });
};

module.exports = Course;
