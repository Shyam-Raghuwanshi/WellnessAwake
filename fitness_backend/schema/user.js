const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    number: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, { timestamps: true })

mongoose.models = {};
const user = mongoose.model("userSchema", userSchema);
module.exports = user;