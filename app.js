/**
 * Module dependencies.
 */

 /**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('logger'),
    http = require('http'),
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment')


//Bootstrap db connection
var db = mongoose.connect(config.db);

autoIncrement.initialize(db);



//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path); 

//passport config
require('./config/passport')(passport);

var app = express();

//express settings
require('./config/express')(app, passport, mongoose);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

 //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.

app.use(function(err, req, res, next) {
            //Treat as 404
            if (~err.message.indexOf('not found')) return next();

            //Log it
            console.error(err.stack);

           
        });

//Assume 404 since no middleware responded
app.use(function(err , req, res, next) {
      console.error(err.stack);
});

//Start the app by listening on <port>
var port = config.port;


console.log('Express app started on port ' + port);

server = app.listen(port);

//expose app
exports = module.exports = app;
