// app/models/todo.js

// load mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text: String,
	done: Boolean
});
