const config = require('./config');
const express = require('express');
const path = require('path');

const app = express();

require('./middlewares')(app);
require('./routes')(app);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../wwwroot/dist/index.html'));
});

app.listen(config.server.port, (err) => {
    if (err) {
        console.error(err);
        return process.exit(1);
    }
    console.log('Now listening on ' + config.server.port);
});