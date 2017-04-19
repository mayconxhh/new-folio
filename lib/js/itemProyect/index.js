import yo from 'yo-yo'

export default function(proyect){
	return yo`<div class="ItemProyect">  
					<div class="ItemProyect__image">
						<img src="${proyect.image}" />
					</div>
					<div class="ItemProyect__text">  
						<h2>${proyect.title}</h2>  
						<a href="${proyect.link}" target="_blank" class="link">Ver</a>  
					</div>  
				</div>`
}