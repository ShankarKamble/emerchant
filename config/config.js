// Load app configuration
var _ = require('underscore'),
path = require('path'),
rootPath = path.normalize(__dirname + '/..');

module.exports = {
	root: rootPath,
	port: 3000,
    db:"mongodb://heroku_4nc2bs9r:27nt1vcsrp94g31i3eaf8d4pdg@ds059654.mongolab.com:59654/heroku_4nc2bs9r",
    app: {
        name: "eMerchant App"
    },
    ServerUrl:'payagg-purulalwani.rhcloud.com',
     ServerPort:'80',
    MergantId:1000
}
