import page from 'page'
import yo from 'yo-yo'
import empty from 'empty-element'
import header from '../header'
import template from './template'

page('/', header, asyncLenguajes, asyncProyects, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.Lenguajes.lenguajes, ctx.Proyects.proyects))
})

async function asyncLenguajes(ctx, next) {
	try {
		ctx.Lenguajes = await fetch('/lenguajes').then(res => res.json())	
		next()
	} catch (err){
		return console.log(err)
	}
}

async function asyncProyects(ctx, next) {
	try {
		ctx.Proyects = await fetch('/proyects').then(res => res.json())	
		next()
	} catch (err){
		return console.log(err)
	}
}