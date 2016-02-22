var application_root = __dirname,
    express = require( 'express' ),
    port = 4711;

var app = express();
require('./config/config.js')(app, express, application_root);
require('./config/routes.js')(app);

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});