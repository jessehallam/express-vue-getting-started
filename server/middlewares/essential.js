const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const path = require('path');

const config = require('../config');

const staticPath = path.resolve(__dirname, '../../wwwroot');

module.exports = function (app) {
    // Static file handling.
    app.use(express.static(staticPath));

    // Request body parsing.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Cookie parsing.
    app.use(cookieParser(config.secret));
};