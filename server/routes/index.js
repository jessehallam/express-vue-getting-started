const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    const modules = fs.readdirSync(__dirname).filter(name => /\.js$/.test(name));

    modules.forEach(module => {
        if (module === 'index.js') return;
        const fn = require(path.join(__dirname, module));
        if (typeof fn !== 'function') {
            throw new Error(`Route ${module} does not export a function.`);
        }
        fn(app);
    });
};