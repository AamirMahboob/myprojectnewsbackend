const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, required: true },
   
});

module.exports = mongoose.model('FormData', FormDataSchema);

  