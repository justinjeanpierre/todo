// server.js

// set up
var express		= require('express');
var app			= express();
var mongoose	= require('mongoose');
var morgan		= require('morgan');
var bodyParser	= require('body-parser');
var methodOverride	= require('method-override');

// configuration

mongoose.connect('mongodb://localhost:27017/todo');

app.use(express.static(__dirname + 'public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

var port = 8080;
app.listen(port);
console.log('todo listening on port ' + port);

