var mongoose 	= require('mongoose')
var Schema 		= mongoose.Schema

var ProyectSchema = new Schema({
	date 		: { type: Date, required: true, default: new Date() },
	title		: { type: String, required: true },
	description : { type: String, required: true },
	image		: { type: String, required: true },
	tags		: []
})

module.exports = mongoose.model('Proyect', ProyectSchema)