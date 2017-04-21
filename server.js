var express = require('express')
var app = express()
var bodyParser 	= require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var port = process.env.PORT || 5000
// var routes = require('./routes')
// var routesAdmin = require('./routes/admin')
var routesBlog = require('./routes/blog')
// var config = require('./config')

app.engine('html', require('ejs').renderFile)

// Database configuration
// mongoose.Promise = global.Promise
// mongoose.connect(config.mlab, function(err){
// 	if (err) {
// 		console.log('Ocurrió un error al tratar de conectar con la base de datos.')
// 	} else {
// 		console.log('Se conecto con la base de datos')
// 	}
// })

app.set('views', __dirname+'/views')
app.set('view engine', 'html')

app.use(morgan('dev'))
app.use(bodyParser.json()) //for parsing aplication/json
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/blog'));

// app.use('/', routes)
// app.use('/admin', routesAdmin)
app.use('/blog', routesBlog)


app.get('*', function(req, res){
	res.render('index')
})

app.listen(port, function(err){
	if (err) {
		console.log('Ocurrió un error al inicialiazar el servidor')
	} else {
		console.log('Servidor corriendo en el puerto: '+port)
	}
})