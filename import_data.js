var mongoose = require('mongoose'),
config = require('./config/config'),
fs = require("fs"),
crypto = require('crypto'),
autoIncrement = require('mongoose-auto-increment');

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

var assert = require('assert'),
User = mongoose.model('User'),
Mobile = mongoose.model('Mobile');



fs.readFile('./data/user.json', 'utf8', function (err,data) {
  data = JSON.parse(data); 
  for(var i = 0; i < data.length; i++) {
    var user = new User(data[i]);
    user.save(function (err) {});
  
  }
    console.log("User done")
});





fs.readFile('./data/mobile.json', 'utf8', function (err,data) {
  data = JSON.parse(data); 
   
    for(var i = 0; i < data.length; i++) {
    var mobile = new Mobile(data[i]);
    mobile.save(function (err) {});
  
  }
});



