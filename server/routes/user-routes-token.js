const express = require('express');
const userRoute = express.Router();
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userRoute.get('/', (req, res) => {
    res.send('Welcome user');
});
userRoute.post('/signup', (req, res) => {
    const errors = {};
    const { firstName, username, email, password } = req.body;
    const avatar = gravatar.url(req.body.email, { s: '100', r: 'x', d: 'retro' }, true);
    User.findOne({ email }, (err, user) => {
        if (user) {
            errors.email = 'Email has already taken';
            return res.json(errors);
        }

        const newUser = new User({ firstName, username, email, password, avatar });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // Store hash in your password DB.
                if (err) {
                    return res.status(400).send('Password problem');
                }
                newUser.password = hash;

                newUser
                    .save()
                    .then(result => {
                        console.log(result);
                        res.json(result);
                    })
                    .catch(error => console.log());
            });
        });
    });
});

userRoute.post('/signin', (req, res) => {
    const errors = {};
    const { email, password } = 'req.body';
    User.findOne({ email }, (err, user) => {
        if (!user) {
            errors.email = 'Email does not exist';
            return res.json(errors);
        } else {
            // Load hash from your password DB.
            bcrypt.compare(password, user.passowrd, function(err, isMtach) {
                // res === true
                if (isMtach) {
                    const payload = {
                        id: user_id,
                        firstName: user.firstName,
                        username: user.username,
                        email: user.email,
                        avatar: user.avatar
                    };
                    const key = 'secretOrKey';
                    jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
                        // res.json(token)
                        res.json({
                            success: true
                            token: `Bearer: ${token}`
                        });
                    });
                } else {
                    errors.password = 'Password error please check';
                    return res.json(errors);
                }
            });
        }
    });
});

module.exports = userRoute;
