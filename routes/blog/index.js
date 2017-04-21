var express = require('express')
var fs = require('fs')
var router = express.Router()

router.get('/:name_page', function(req, res, next){
	fs.readFile('views/blog/'+req.params.name_page+'.html', function(err, data){
		if (err) {
			res.redirect('/404')
		} else {
			res.render('index')
		}
	})
})

module.exports = router