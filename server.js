var path = require('path');  
var express = require('express');  
var webpack = require('webpack');  
var webpackMiddleware = require('webpack-dev-middleware');  
var config = require('./webpack.config.js');

const app = express();  

app.use(express.static(__dirname + '/build'));  
app.use(express.static(__dirname + '/src/components/slides/demo')); 
app.use(express.static(__dirname + '/src')); 

app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(3000,function() {
  console.log('server listening at port 3000...'); 
})