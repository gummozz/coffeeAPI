// Main requirements
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// remember this
// let yes = new jsonGenerator('yes');

// Custom modules
const jsonGeneratorModule = require('./jsonGenerator.js');
const jsonGenerator = jsonGeneratorModule.jsonGenerator

// Begin

// Array to store data in - this is temporary and will be replaced by MongoDB ASAP
global.Data = [];

// Setup app base
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());

// "Index" - simply print Json for now
app.get('/', (request, response) => {
    response.json({"message": "hi fam"})
})

require('./app/routes/data.routes.js')(app);

//Nginx configured to proxy / to this app (as I'm writing this)
app.listen(3000);
