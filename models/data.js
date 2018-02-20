var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    nodes : [ ],
    links: [ ]
});


module.exports = mongoose.model("data", dataSchema);