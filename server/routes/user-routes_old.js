const express = require('express');
const userRoute = express.Router();
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userRoute.get('/', (req, res) => {
    res.send('Welcome user');
});
userRoute.post('/', (req, res) => {
    const errors = {};
    const { firstName, username, email, password } = req.body;
    const avatar = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true); // from gravatar npm
    User.findOne({ email }, (err, user) => {
        if (user) {
            errors.email = 'Email has already been taken';
            return res.json(errors);
        }

        const newUser = new User({ firstName, username, email, password, avatar });
        newUser
            .save()
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(error => console.log());
        // res.send('Lets us create a user')
    });
});

module.exports = userRoute;
