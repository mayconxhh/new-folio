import yo from 'yo-yo'
import itemProyect from '../itemProyect'

export default function(proyects){

	// var portafolio = [
	// 	{
	// 		link: 'http://adoptamedemo.herokuapp.com/'
	// 		title: 'Adoptame Demo',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Dale un hogar a estos perritos.',
	// 		image: '/images/portafolio/proyectos/adoptame.jpg',
	// 		tags:['Web Responsive', 'Single page', 'Google Maps Api', 'Bootstrap']
	// 	},
	// 	{
	// 		link: 'http://animeawesome-mayconxhh.rhcloud.com/'
	// 		title: 'Awesome Anime',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Haz un albúm con tus animes favoritos.',
	// 		image: '/images/portafolio/proyectos/awesomeanime.jpg',
	// 		tags:['Web responsive', 'Dinámica', 'Anime', 'Nodejs']
	// 	},
	// 	{
	// 		link: 'http://bootstrapresponsive.herokuapp.com/'
	// 		title: 'Workshop',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Organiza workshops de forma fácil.',
	// 		image: '/images/portafolio/proyectos/bootstrap.jpg',
	// 		tags:['Web Responsive', 'Workshop', 'Javascript', 'Bootstrap']
	// 	},
	// 	{
	// 		link: 'http://devpuls.herokuapp.com/'
	// 		title: 'Puls 2014',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Pequeña web app para realizar publicaciones.',
	// 		image: '/images/portafolio/proyectos/puls.jpg',
	// 		tags:['Web Responsive', 'Microblog', 'Javascript']
	// 	},
	// 	{
	// 		link: 'http://apiweather.herokuapp.com/'
	// 		title: 'Api Weather',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Informate sobre el clima.',
	// 		image: '/images/portafolio/proyectos/api_weather.jpg',
	// 		tags:['Web Responsive', 'Ajax', 'Weather']
	// 	},
	// 	{
	// 		link: 'http://hotelcometa.herokuapp.com/'
	// 		title: 'Hotel Cometa',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Disfruta tu estadia con los mejores servicios.',
	// 		image: '/images/portafolio/proyectos/cometa.jpg',
	// 		tags:['Web responsive', 'Geolocalización', 'Api Google Maps']
	// 	},
	// 	{
	// 		link: 'http://tvfy.herokuapp.com/'
	// 		title: 'TVfy',
	// 		date: ISODate("2017-04-19T21:17:18.508Z"),
	// 		description: 'Encuentra tu serie favorita en esta colección.',
	// 		image: '/images/portafolio/proyectos/tvfy.jpg',
	// 		tags:['Api TV Maze', 'Ajax', 'Tv Maze']
	// 	}

	// ]

	return yo`<section class="Portafolio">
				<article class="Portafolio__container Container">
					<div class="Portafolio__text">
						<h2>
							Mi Portafolio
						</h2>
						<p>
							Aqui algunas cosas en las que he ido experimentando y agarrando experiencia.
						</p>
					</div>
					<div class="Portafolio__items">
						${proyects.map(function(item){
							return itemProyect(item)
						})}
					</div>
				</article>	
			</section>`
}