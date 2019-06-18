const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const studentRoute = require('./server/routes/student-routes');
const userRoute = require('./server/routes/user-routes');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Server is connected to MongoDB Database');
});

// app.get('/', (req, res) => {
//     res.send('MERN Stack application');
// });

app.use(cors());
app.use(express.json());
// app.use(studentRoute);
app.use('/api/v1.0', studentRoute); // every other paths are now append to /api/v1.0/students
app.use('/api/v1.0/users', userRoute);
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`The server is running at http//localhost:${PORT}`);
});
