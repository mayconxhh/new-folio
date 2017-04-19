var mongoose 	= require('mongoose')
var Schema 		= mongoose.Schema

var ProyectSchema = new Schema({
	link		: { type: String, required: true },
	date 		: { type: Date, required: true, default: new Date() },
	title		: { type: String, required: true },
	description : { type: String, required: true },
	image		: { type: String, required: true },
	tags		: { type: Array }
})

module.exports = mongoose.model('Proyect', ProyectSchema)