const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// this file is setting up the user auth or the suer 'Schema' for what is required by users
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema)

module.exports = User;