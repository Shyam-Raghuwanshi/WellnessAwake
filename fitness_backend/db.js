const mongoose = require('mongoose')
const connectDb = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/fitnessData', { useNewUrlParser: true, useUnifiedTopology: true });

}

module.exports = connectDb;