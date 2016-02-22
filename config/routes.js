var BookModel = require('../models/Book.js');

module.exports = function(app) {
	app.get('/api', function(req, res) {
		res.send('library api is running');
	});

	app.get( '/api/books', function( request, response ) {
	    return BookModel.find( function( err, books ) {
	        if( !err ) {
	            return response.send( books );
	        } else {
	            return console.log( err );
	        }
	    });
	});

	app.post( '/api/books', function( request, response ) {
	    var book = new BookModel({
	        title: request.body.title,
	        author: request.body.author,
	        releaseDate: request.body.releaseDate,
	        keywords: request.body.keywords
	    });

	    return book.save( function( err ) {
	        if( !err ) {
	            console.log( 'created' );
	            return response.send( book );
	        } else {
	            console.log( err );
	        }
	    });
	});

	app.get('/api/books/:id', function( request, response ) {
	    return BookModel.findById( request.params.id, function( err, book ) {
	        if (!err) {
	            return response.send(book);
	        } else {
	            return console.log(err);
	        }
	    })
	});

	app.put( '/api/books/:id', function( request, response ) {
	    console.log( 'Updating book ' + request.body.title );
	    return BookModel.findById( request.params.id, function( err, book ) {
	        book.title = request.body.title;
	        book.author = request.body.author;
	        book.releaseDate = request.body.releaseDate;
	        book.keywords = request.body.keywords;

	        return book.save( function( err ) {
	            if( !err ) {
	                console.log( 'book updated' );
	                return response.send( book );
	            } else {
	                console.log( err );
	            }
	        });
	    });
	});

	app.delete( '/api/books/:id', function( request, response ) {
	    console.log( 'Deleting book with id: ' + request.params.id );
	    return BookModel.findById( request.params.id, function( err, book ) {
	        return book.remove( function( err ) {
	            if( !err ) {
	                console.log( 'Book removed' );
	                return response.send( '' );
	            } else {
	                console.log( err );
	            }
	        });
	    });
	});
}