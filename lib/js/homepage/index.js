import page from 'page'
import yo from 'yo-yo'
import empty from 'empty-element'
import header from '../header'
import template from './template'

page('/', header, asyncLoad, function(ctx, next){
	console.log(ctx.Lenguajes)
	var main = document.getElementById('main-container')
	console.log('casa')
	empty(main).appendChild(template(ctx.Lenguajes))
})

async function asyncLoad(ctx, next) {
	try {
		ctx.Lenguajes = await fetch('/lenguajes').then(res => res.json())		
		next()
	} catch (err){
		return console.log(err)
	}
}