const session = require('express-session');
const FileStore = require('session-file-store')(session);

const config = require('../config');

module.exports = function (app) {
    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: config.secret,
        store: new FileStore(config.session)
    }));
};