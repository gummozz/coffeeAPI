// Main requirements
const path = require('path');
const express = require('express');
// Custom modules
const jsonGeneratorModule = require('./jsonGenerator.js');
const jsonGenerator = jsonGeneratorModule.jsonGenerator

// Begin

// Array to store data in - this is temporary and will be replaced by MongoDB ASAP
global.Data = [];

// Setup app base
const app = express();

// Middle thing that logs all the requested URLs
app.use((request, response, next) => {
    console.log(request.url)
    next()
})

// "Index" - simply print Json for now
app.get('/', (request, response) => {
    response.json(global.Data);
})

// Temp - replace with actual REST POST methods
app.get('/yes', (request, response) => {

    let yes = new jsonGenerator('yes');
    
    global.Data.push(yes);
    response.sendStatus(200);
})

// Temp - replace with actual REST POST methods
app.get('/no', (request, response) => {

    let no = new jsonGenerator('no');
    
    global.Data.push(no);
    response.sendStatus(200);
})

//Nginx configured to proxy / to this app (as I'm writing this)
app.listen(3000);
