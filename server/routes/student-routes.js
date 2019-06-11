const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');

// studentRoute.route('/').get((req, res) => {}); // same as below
studentRoute.get('/', (req, res) => {
    res.send('Mern Application');
});

// get all the students
studentRoute.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            return res.status(404).send('Students not found');
        }
        res.json(students);
    });
});

// get each student by id
studentRoute.get('/students/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Student.findOne({ _id: id }, (err, student) => {
        if (err) {
            return res.status(404).send('A student was not found');
        }
        res.json(student);
    });
});

// create a new student using post method
studentRoute.post('/students', (req, res) => {
    // const body = req.body;
    // console.log(body);
    // const {name, country, age, bio} = req.body // this is used in case you want to post process - reduce/ add more
    // clean data and so on
    // const newStudent = req.body
    // res.send('post body');
    const createdAt = new Date();
    req.body.createdAt = createdAt;
    const student = new Student(req.body);
    student
        .save() // this is only a pending promise not yet resolved. We need the .then part to solve it and catch for error
        // .then(st=>res.send('A student has been added'))
        .then(st => res.json(st))
        .catch(error => console.log(error));
});

// delete
studentRoute.get('/students/:id/delete', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Student.deleteOne({ _id: id }, (err, student) => {
        if (err) {
            return res.status(404).send('A student was not found');
        }
        return res.redirect('/students');
    });
});

module.exports = studentRoute;
