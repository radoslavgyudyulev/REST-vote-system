// modules imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// custom imports
const config = require('./config/config');
const func = require('./func');

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up the database
require('./config/database')(config);

// Setting up the server
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));


// Routes
app.post('/api/create', func.createVote)
app.post('/api/get', func.getCurrentVote)
app.post('/api/vote', func.incrementVote)