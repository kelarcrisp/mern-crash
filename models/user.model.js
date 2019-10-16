const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// this file is setting up the user auth or the suer 'Schema' for what is required by users. this is pretty much a boilerplate settup for thr schema you will for any other models in the future
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