// data.routes.js

module.exports = (app) => {
    const coffeeController = require('../controllers/data.controller.js');

    // Add new coffee data entry
    app.post('/coffee', coffeeController.create);

    // Get all coffee data
    app.get('/coffee', coffeeController.findAll);

    // Get coffee data entry with coffeeID
    app.get('/coffee:coffeeID', coffeeController.findOne);

    // Update a coffee data entry with coffeeID
    app.put('/coffee:coffeeID', coffeeController.update);

    // Delete a coffee data entry with coffeeID
    app.delete('/coffee:coffeeID', coffeeController.delete);
}