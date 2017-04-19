var express = require('express')
var router = express.Router()
var jwt 		= require('jsonwebtoken')
var moment		= require('moment')
var User = require('../../models/user')
var Proyect = require('../../models/proyect')

router.post('/login', function(req, res, next){

	User.findOne({username: req.body.username}).select('email username password access').exec(function(err, user){
		if (err) throw err

		if (!user) {
			res.json({success:false, msg:'El usuario no existe'})
		} else {

			if (req.body.password) {

				var validPassword = user.comparePassword(req.body.password)

				if (!validPassword) {
					res.json({success: false, msg:'La contraseña proporcionada es incorrecta'})
				} else {
					var dateExpire = moment().add(14, "days").unix()
					var token = jwt.sign({username: user.username, email: user.email}, 'asdasdassdsd', { expiresIn: dateExpire })
					res.json({success: true, msg: 'Usuario logueado', token:token})
				}

			} else {
				res.json({success: false, msg:'No ha proporcionado una contraseña'})
			}
			
		}

	})
})

router.post('/new/user', function(req, res, next){

	var data = {
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
		email: req.body.email,
		access: 'admin'
	}

	var user = new User(data)
	user.save(function(err, user){
		if (err) {
			console.log(err)
			res.json({success:false, msg:err})
		} else {
			console.log(user)
			res.json({success:true, msg:'Se ha creado el usuario con éxito!'})
		}
	})
})

router.post('/proyect', function(req, res, next){

	var data = {
		title : req.body.title,
		description : req.body.description,
		image : req.body.image,
		tags : req.body.tags
	}

	var proyect = new Proyect(data)
	proyect.save(function(err, proyect){
		if (err) {
			if (err.errors.tags) {
				res.json({success:false, msg:'Ocurrió un error inesperado, asegurese de haber llenado el campo '+err.errors.tags.path, err: err.errors.tags })
			} else if(err.errors.image){
				res.json({success:false, msg:'Ocurrió un error inesperado, asegurese de haber llenado el campo '+err.errors.image.path, err: err.errors.image })
			} else if(err.errors.description){
				res.json({success:false, msg:'Ocurrió un error inesperado, asegurese de haber llenado el campo '+err.errors.description.path, err: err.errors.description })
			} else if(err.errors.title){
				res.json({success:false, msg:'Ocurrió un error inesperado, asegurese de haber llenado el campo '+err.errors.title.path, err: err.errors.title })
			} else {
				console.log(err)
				res.json({success:false, msg:'Ocurrió un error', err:err})
			}
		} else {
			console.log(proyect)
			res.json({success:true, proyect: proyect, msg:'Se ha subido el proyecto con éxito!'})
		}
	})
})

// router.post('/new/post', function(req, res, next){
	
// })

module.exports = router