var express = require('express')
var router = express.Router()
var Proyect = require('../models/proyect')
var Lenguaje = require('../models/lenguajes')

router.get('/', function(req, res, next){
	res.render('index')
})

router.get('/about-me', function(req, res, next){
	res.render('index')
})

router.get('/cv', function(req, res, next){
	res.render('index')
})

router.get('/contact', function(req, res, next){
	res.render('index')
})

router.get('/proyects', function(req, res, next){
	Proyect.find(function(err, proyect){
		res.json({proyects: proyect})
	})
})

router.get('/lenguajes', function(req, res, next){
	Lenguaje.find(function(err, lenguaje){
		res.json({lenguajes: lenguaje})
	})
})


module.exports = router