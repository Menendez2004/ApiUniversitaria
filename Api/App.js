const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3307;

app.use(bodyParser.json());

// Importa las rutas desde los controladores
const courses = require('./Routes/courses.routes');
const subject = require('./Routes/subjects.routes');
const registration = require('./Routes/registrations.routes');
const prerequisites = require('./Routes/prerequisites.routes');
const students = require('./Routes/students.routes');

app.use('/courses', courses);
app.use('/subjects', subject);
app.use('/registrations', registration);
app.use('/prerequisites', prerequisites );
app.use('/students', students);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
