const bodyparser = require('body-parser');

const express = require('express');
const router = require('./router')

const app = express();

app.use(express.json());
app.use(router);
app.use(bodyparser.json());



module.exports = app;