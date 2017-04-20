import yo from 'yo-yo'
import empty from 'empty-element'

var el = yo`<nav class="Header">
				<div class="Header__container Container">
					<div class="Header__logo">
						<h1 class="Header__logo__image">
							<a href="/">
								Maycon Huayapa
							</a>
						</h1>
					</div>
					<div class="Header__button" onclick=${menuMobile}>
						<img src="/images/menu-button.png" alt="button"/>
					</div>
					<div class="Header__NavDesktop">
						<ul class="Header__NavDesktop__options">
							<li class="Item"><a href="/">Home</a></li>
							<li class="Item"><a href="/about-me">Sobre Mí</a></li>
							<li class="Item"><a href="/cv">CV</a></li>
							<li class="Item"><a href="/contact">Contacto</a></li>
						</ul>
					</div>
					<div class="Header__NavMobile" id="menu-mobile">
						<ul class="Header__NavMobile__options">
							<li class="Item"><a href="/" onclick=${hideMobile}>Home</a></li>
							<li class="Item"><a href="/about-me" onclick=${hideMobile}>Sobre Mí</a></li>
							<li class="Item"><a href="/contact" onclick=${hideMobile}>Contacto</a></li>
							<li class="Item"><a href="/cv" onclick=${hideMobile}>CV</a></li>
							<li class="Item"><a href="/contact" onclick=${hideMobile}>Contacto</a></li>
						</ul>
					</div>
				</div>
			</nav>`

function menuMobile() {
	var menuMobile = document.getElementById('menu-mobile')

	if (menuMobile.style.left === '0px') {
		menuMobile.style.left = '-100%'
	} else {
		menuMobile.style.left = '0px'
	}
} 

function hideMobile() {
	var menuMobile = document.getElementById('menu-mobile')

	menuMobile.style.left = '-100%'
}

export default function(ctx, next){
	var container = document.getElementById('header-container')
	empty(container).appendChild(el)
	next()
}
// <figure>
// 	<img src="/images/logo.png"/>
// </figure>