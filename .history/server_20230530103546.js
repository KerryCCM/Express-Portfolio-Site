process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(7000);
module.exports = app;

console.log('Server running at http://localhost:7000/');