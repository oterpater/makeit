const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./db');
const animalRouter = require('./routes/animal');
const shelterRouter = require('./routes/shelter');
const adminRouter = require('./routes/admin');
const adopterRouter = require('./routes/adopter');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/admins', adminRouter);
app.use('/adopters', adopterRouter);
app.use('/shelter', shelterRouter);
app.use('/shelter/:shelterId/animals', animalRouter);

module.exports = app;