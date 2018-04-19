const path = require('path');

module.exports = {
    secret: 'AAAAaaaa',
    server: {
        port: 49000
    },
    session: {
        path: path.resolve(__dirname, '../.session-cache'),
        ttl: 2628000 /* one month */
    }
};