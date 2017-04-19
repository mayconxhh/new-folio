var express = require('express')
var router = express.Router()
var Proyect = require('../models/proyect')
var Lenguaje = require('../models/lenguajes')

router.get('/', function(req, res, next){
	res.render('index')
})

router.get('/proyects', function(req, res, next){
	Proyect.find(function(err, proyect){
		console.log(proyect)
		res.json({proyects: proyect})
	})
})

router.get('/lenguajes', function(req, res, next){
	Lenguaje.find(function(err, lenguaje){
		console.log(lenguaje)
		res.json({lenguajes: lenguaje})
	})
})


module.exports = router