/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');


/**
 * Mobile Schema
 */
var MobileSchema = new Schema({
    name:String,
    prize: String,
    details: String,
    camera:String,
    battery :String,
    url:String
});

MobileSchema.plugin(autoIncrement.plugin, { model: 'Mobile', field: 'mobileId', startAt: 1 });
mongoose.model('Mobile', MobileSchema);