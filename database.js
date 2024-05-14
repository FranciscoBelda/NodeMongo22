const mongoose = require('mongoose');

const URI = PROCESS.env.secret;

mongoose.connect(URI)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
