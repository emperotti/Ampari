const bodyparser = require('body-parser');

const express = require('express');
const router = require('./router')

const app = express();

app.use(express);
app.use(router);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));




module.exports = app;