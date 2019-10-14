const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// and same as the other schema except for this schema will be used for the exercises
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },

}, {
        timestamps: true,
    });

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;