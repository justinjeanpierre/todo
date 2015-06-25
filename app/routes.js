// app/routes.js

// load model
var Todo = require('./models/todo');

// expose routes
module.exports = function (app) {
	app.get('/api/todos', function(req, res) {
		Todo.find(function(err, todos) {
			if (err) {
				res.status(500).json({message:'error finding todos'});
			}
				
			res.status(200).json(todos);
		});
	});
	
	app.post('/api/todos', function(req, res) {
		Todo.create({
			text:req.body.text,
			done: false
		}, function(err, todo) {
			if (err) {
				res.status(500).json({message:'error creating todo'});
			}
			
			Todo.find(function(err, todos) {
				if (err) {
					res.status(500).json({message:'error retrieving todos'});
				}
				
				res.status(200).json(todos);
			});
		});
	});
	
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id:req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.status(500).json({message:'error deleting todo'});
				
			Todo.find(function(err, todos) {
				if (err) {
					res.status(500).json({message:'error retrieving todos'});
				}
				
				res.status(200).json(todos);
			});
		});
	});
	
	// application
	app.get("*", function(req, res) {
		res.sendfile('./public/index.html');
	});
};
