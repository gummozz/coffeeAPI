// data.model.js

const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
        coffee: String,
        comment: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', DataSchema);