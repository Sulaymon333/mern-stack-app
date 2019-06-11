const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    age: {
        type: Number
    },
    bio: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// const Student =  mongoose.model('student', studentSchema);
// module.exports = Student

// one liner
module.exports = Student = mongoose.model('student', studentSchema);
