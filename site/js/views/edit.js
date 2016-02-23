var app = app || {};

$(function() {
	app.EditBook = Backbone.View.extend({
		el: '#editBook',
		tagName: 'div',
		

	    template: _.template( $( '#editTemplate' ).html() ),

	    initialize: function() {
	    	// remove the existing view
	    	this.$el.empty();
	    	this.render();
	    },

	    render: function() {
	        this.$el.html( this.template(this.model.attributes) );

	        return this;
	    },

	    events: {
	    	'click .delete': 'deleteBook',
	    	'click #update': 'updateBook'
	    },

	    deleteBook: function() {
	    	this.model.destroy();
	    	this.remove();
	    },

	    updateBook: function() {
	    	alert('book updated');
	    },

	    clearView: function() {
	    	this.unbind();
	    	this.stopListening();
	    }


	});
})
