const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const passport = require('passport');

studentRoute.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('Home page');
});

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

// protected
// studentRoute.get('/students', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretOrKey', function(err, data) {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             console.log('A create use has been access... ', data);
//             Student.find({}, (err, students) => {
//                 if (err) {
//                     return res.status(404).send('Students not found');
//                 }
//                 res.json(students);
//             });
//         }
//     });
// });

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
        .save() // this is only a pending promise not yet resolved. We need the .then part to resolve it and the .catch for error
        // .then(st=>res.send('A student has been added'))
        .then(st => res.json(st))
        .catch(error => console.log(error));
});

// edit
studentRoute.put('/students/:id', (req, res) => {
    const _id = req.params.id;
    const { name, country, age, bio } = req.body;
    Student.findOne({ _id }, (err, student) => {
        if (err) {
            return res.status(404).send('Error');
        }
        student.name = name;
        student.country = country;
        student.age = age;
        student.bio = bio;
        student
            .save()
            .then(student => {
                res.send('Saved');
            })
            .catch(error => console.log(error));
    });
});

// delete
studentRoute.delete('/students/:id', (req, res) => {
    const _id = req.params.id;
    // console.log(id);
    Student.deleteOne({ _id }, (err, student) => {
        if (err) {
            return res.status(404).send('A student was not found');
        }
        res.send('A student has been deleted');
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['Authorization'];
    if (bearerHeader) {
        //Split at the space
        const bearer = bearerHeader.split(' ');
        //Get token from an array
        const bearerToken = bearer[1];
        //set the token
        console.log('bearerToken', bearerToken);
        req.token = bearerToken;
        //Next middleware
        next();
    } else {
        return res.status(403).json({ message: 'Accessed denied' });
    }
}
module.exports = studentRoute;
