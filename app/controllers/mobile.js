/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Mobile = mongoose.model('Mobile'),
    User = mongoose.model('User'),
     config = require('../../config/config'),
    _ = require('underscore'),
    async  = require('async'),
    http = require('http');;






/**
 * getEnterPriseById site notifcaition not equal to closed
 */
exports.getMobiles = function(req, res) {
    async.waterfall([
      
        function (next) {
            Mobile.find().exec(function(err, sites) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    next(err ,sites)
                }
            });
        },
        
                    
                ], function (err,sites) {
         var resultData = {sites :sites}
         res.jsonp(resultData);
});
};



/**
 * List of buyProducts
 */
exports.buyProducts = function(req, res) {

  var optionsget = {
    host : config.ServerUrl,
    port : config.ServerPort,
    path : '/triggerPayment?payAgg_MID='+config.MergantId+'&amount=100&userId='+req.user.mobile, // url with parameters
    method : 'GET', // GET Method
    contentType : 'application/json'
};

   var reqGet = http.request(optionsget, function(response) {
            response.on('data', function(data) { 
            
                  res.end(data); // Writing the Remote REST Call response to the Express REST API "getRemoteData"
            });
        });

        reqGet.end();
        reqGet.on('error', function(e) {
            console.error(e);
        });
};