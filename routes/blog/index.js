var express = require('express')
var router = express.Router()

router.get('/:name_page', function(req, res, next){
	res.render('index')
})

module.exports = router