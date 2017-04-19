var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LenguajeSchema = new Schema({
	date 		: { type: String, required: true },
	title		: { type: String, required: true },
	description : { type: String, required: true },
	image 		: { type: String, required: true }
})

module.exports = mongoose.model('Lenguaje', LenguajeSchema)