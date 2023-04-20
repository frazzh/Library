const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api',
        {
            target: 'http://54.175.192.150:5000/',
            secure: false
        }
    ));
}
