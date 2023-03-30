const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api',
        {
            target: 'http://54.227.162.108:5000/',
            secure: false
        }
    ));
}
