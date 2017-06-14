// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');
// var cars = require('./modules/cars')


// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', index);
// app.use('/cars', cars);


// globals
var port = process.env.PORT || 3000;

//spin up server
app.listen(port, function(){
  console.log('server up on: ', port);
});// end spin up server
