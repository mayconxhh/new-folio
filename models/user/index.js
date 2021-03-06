var mongoose 	= require('mongoose')
var bcrypt 		= require('bcrypt-nodejs')
var titlize 	= require('mongoose-title-case')
var validate 	= require('mongoose-validator')
var Schema 		= mongoose.Schema

var firstNameValidator = [
	validate({
		validator: 'matches',
		arguments: /^(([a-zA-Z]{2,10})\w)$/,
		message: 'Must be at least 3 characters, max 20, no especial characters or numbers, must have space a between name.'
	})
]

var lastNameValidator = [
	validate({
		validator: 'matches',
		arguments: /^(([a-zA-Z]{2,10})\w)$/,
		message: 'Must be at least 3 characters, max 20, no especial characters or numbers, must have space a between name.'
	})
]

var emailValidator = [
	validate({
		validator: 'isEmail',
		message	 : 'Is not a valid e-mail.'
	}),
	validate({
		validator: 'isLength',
		arguments: [3,25],
		message	 : 'Email should be between {ARGS[0]} and {ARGS[1]} characters.'
	})
]

var usernameValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 25],
		message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters.'
	}),
	validate({
		validator: 'isAlphanumeric',
		message  : 'Username must contain letters and numbers only.'
	})
]

var passwordValidator = [
	validate({
		validator: 'matches',
		arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?!.*?[\s])(?=.*?[\W]).{8,25}$/,
		message: 'Password needs to have at least one lowercase, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
	})
]

var UserSchema = new Schema({
	firstName 		: { type: String, required: true, validate: firstNameValidator },		
	lastName 		: { type: String, required: true, validate: lastNameValidator },		
	username 		: { type: String, lowercase: true, required: true, unique: true, validate: usernameValidator },
	password 		: { type: String, required: true, validate: passwordValidator, select: false },
	email 			: { type: String, required: true, lowercase: true, unique: true, validate: emailValidator},
	// active			: { type: Boolean, required: true, default: false },
	// temporarytoken	: { type: String, required: true },
	access			: { type: String, required: true, default: 'default'}
})

UserSchema.pre('save', function(next){
	var user = this

	if (!user.isModified('password')) return next()

	bcrypt.hash(user.password, null, null, function(err, hash){

		if (err) {
			console.log('Ocurrió un error')
			console.log(err)
			return next(err)
		}

		user.password = hash
		next()
	})
})

UserSchema.plugin(titlize, {
  paths: [ 'name' ]
})

UserSchema.methods.comparePassword = function(password){
	return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)