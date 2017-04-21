import page from 'page'
import header from '../header'
import empty from 'empty-element'
import template from './template'

page('/blog/:name_page', nota_blog, header, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.Text))
})

async function nota_blog(ctx, next) {

	fetch('/'+ctx.params.name_page+'.html')
		.then(res => {
			if (res.status === 200) {
				res.text().then(function(text){
					ctx.Text = text
					next()
				})
			} else {
				location.href = '/'
			}
		})
		.catch(function(err){
			console.log(err)
		})

}