import page from 'page'
import header from '../header'
import empty from 'empty-element'
import template from './template'

page('/cv', header, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template())
})