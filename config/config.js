// Load app configuration
var _ = require('underscore'),
path = require('path'),
rootPath = path.normalize(__dirname + '/..');

module.exports = {
	root: rootPath,
	port: 3000,
    db:"mongodb://localhost/eMerchant",
    app: {
        name: "eMerchant App"
    },
    ServerUrl:'payagg-purulalwani.rhcloud.com',
     ServerPort:'80',
    MergantId:1000
}
