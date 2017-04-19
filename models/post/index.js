var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
	title:,
	text:,
	date:,
	author:,
	tags:,
	comments:
})

module.exports = mongoose.model('Post', PostSchema)