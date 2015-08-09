// app.js

// set up
var express		= require('express');
var app			= express();
var mongoose	= require('mongoose');
var morgan		= require('morgan');
var bodyParser	= require('body-parser');
var methodOverride	= require('method-override');

// configuration
var database = require('./config/database');
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

// load routes
require('./app/routes')(app);

// listen
var server = app.listen(process.env.PORT || 3431, function() {
  console.log('todo listening on port ' + server.address().port);
});
