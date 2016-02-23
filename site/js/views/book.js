var app = app || {};

$(function() {
	app.BookView = Backbone.View.extend({
	    tagName: 'div',
	    className: 'bookContainer',
	    template: _.template( $( '#bookTemplate' ).html() ),

	    render: function() {
	        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
	        this.$el.html( this.template( this.model.attributes ) );

	        return this;
	    },

	    events: {
	    	'click .delete': 'deleteBook',
	    	'click .edit': 'editBook'
	    },

	    deleteBook: function() {
	    	this.model.destroy();
	    	this.remove();
	    },

	    editBook: function() {
	    	// call another function with the model info passed
	    	var editView = new app.EditBook({model: this.model});
	    	// editView.render();
	    }
	});
})
