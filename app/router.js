let middleware = require('./middleware.js');

module.exports = {
    init(app, container){

        // initial the middleware
        // please do not touch this part
        // you need to register your middleware into the middleware.js
        middleware.init(app, container);


        // search
        app.get('/api/search', container.cradle.PanelController.index);
        app.get('/login', container.cradle.AuthController.login);

    }
}
