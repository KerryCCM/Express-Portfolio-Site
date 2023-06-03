/*Name:Cheuk Man Chan
     StudentID :301264488
     Date:2/6/2023               
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(7000);
module.exports = app;

console.log('Server running at http://localhost:7000/');


