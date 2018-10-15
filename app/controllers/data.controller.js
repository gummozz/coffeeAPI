// data.controller.js

const CoffeeDataEntry = require('../models/data.model.js');

// Create and save a new coffee data entry
exports.create = (request, response) => {
    // Validate request
    if(!request.body.coffee) {
        return response.status(400).send({
            message: "ERR_NO_DATA_RECEIVED"
        });
    }

    // Create a new coffee data entry
    const coffeeDataEntry = new CoffeeDataEntry({
        coffee: request.body.coffee,
        comment: request.body.comment || "No comment"
    });

    // Save entry to DB
    coffeeDataEntry.save()
    .then(data => {
        response.send(data);
    }).catch(err => {
        response.status(500).send({
            message: err.message || "Server side error fam we goofed"
        });
    });
};

// Get all coffee data
exports.findAll = (request, response) => {
    CoffeeDataEntry.find()
    .then(coffeeDataEntries => {
        response.send(coffeeDataEntries);
    }).catch(err => {
        response.status(500).send({
            message: err.message || "Server side error fam we goofed"
        });
    });
};

// Get coffee data entry with coffeeID
exports.findOne = (request, response) => {

};

// Update a coffee data entry with coffeeID
exports.update = (request, response) => {

};

// Delete a coffee data entry with coffeeID
exports.delete = (request, response) => {

};