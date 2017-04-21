import page from 'page'
import header from '../header'
import empty from 'empty-element'
import template from './template'

page('/blog/:name_page', header, nota_blog, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.Text))
})

async function nota_blog(ctx, next) {

	fetch('/'+ctx.params.name_page+'.html')
		.then(res => {
			return res.text()
		})
		.then(res => {
			console.log(res)
			ctx.Text = res
			next()
		})
		.catch(function(err){
			console.log(err)
		})

}