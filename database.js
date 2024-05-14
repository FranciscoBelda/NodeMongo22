const mongoose = require('mongoose');

const URI = process.env.url;

mongoose.connect(URI)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
