const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'colores8Q',
    database: 'api_udb', 
    port: 3307

});

db.connect(function(err){
    if (err) throw err;
    console.log('Database connected!');

});

module.exports = db;