import yo from 'yo-yo'
import itemLenguaje from '../itemLenguaje'

export default function(lenguajes){
	var Lenguajes = [
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/html5.jpg',
			title: 'HTML5',
			description: 'Estructura y maquetado.'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/css3.jpg',
			title: 'CSS3',
			description: 'Estilos y animaciones.'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/js.jpg',
			title: 'Javascript',
			description: 'Lenguaje de programación.'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/jquery.jpg',
			title: 'jQuery',
			description: 'Animación e interacción.'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/responsive.jpg',
			title: 'Responsive Desing',
			description: 'Adapta tu web a los diferentes dispotivos.'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/bootstrap.jpg',
			title: 'Bootstrap',
			description: 'Framework de CSS'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/stylus.jpg',
			title: 'Stylus',
			description: 'Preprocesador CSS'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/jade.jpg',
			title: 'Jade',
			description: 'Motor de render de Templates'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/react.jpg',
			title: 'ReactJs',
			description: 'Librería enfocada en la visualización'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/node.jpg',
			title: 'NodeJs',
			description: 'Javascript del lado del servidor'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/gulp.jpg',
			title: 'Gulp',
			description: 'Automatizador de tareas'
		},
		{
			date:"2017-04-19T17:03:33.171Z",
			image: '/images/portafolio/wordpress.jpg',
			title: 'Wordpress',
			description: 'Plataforma semántica de publicación'
		}
	]

	return yo`<section class="Preparation" id="preparacion">
				<article class="Preparation__container Container">
					<div class="Preparation__text">
						<h2>
							Mi Preparación
						</h2>
						<div>
							<p>
							He desarrollado mis habilidades usando las mejores tecnologías.
						</p>
						</div>
					</div>
					<div class="Preparation__Items" id="preparacion_content">
						${Lenguajes.map(function(item){
							return itemLenguaje(item)
						})}
					</div>
				</article>			
			</section>`
}