// import express from 'express';
// import { json } from 'body-parser';
// import cors from 'cors';
// require('dotenv').config();

// const app = express();

// app.use(json());
// app.use(cors());

// require('./services/EmailService')(app);

// app.use((err, req, res, next) => {
//     res.json(err);
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Listening on port ${process.env.PORT}`);
// });

// export default app;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options('/contact/emailpost', cors()); // Enable preflight requests 
require('./services/EmailService')(app);

app.use((err, req, res, next) => {
    res.json(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
