var bodyParser = require('body-parser'), //Parser for reading request body
	path = require('path') //Utilities for dealing with file paths


module.exports = function(app, express, application_root) {
	
	//Where to serve static content
	app.use( express.static( path.join( application_root, 'site') ) );
	app.use(bodyParser());

	// Configure server
	app.configure( function() {
	    //parses request body and populates request.body
	    app.use( express.bodyParser() );

	    //checks request.body for HTTP method overrides
	    app.use( express.methodOverride() );

	    //perform route lookup based on url and HTTP method
	    app.use( app.router );

	    //Where to serve static content
	    app.use( express.static( path.join( application_root, 'site') ) );

	    //Show all errors in development
	    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
	});
}