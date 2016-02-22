var mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/library_database' );

var Keywords = new mongoose.Schema({
    keyword: String
});

var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [ Keywords ]
});

module.exports = mongoose.model('Book', Book);
