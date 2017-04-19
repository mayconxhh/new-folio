import yo from 'yo-yo'

export default function(item){
	return yo`<div class="ItemLenguaje">
					<div class="ItemLenguaje__image">
						<img src="${item.image}" class="imag1" width="150" height="150">
					</div>
					<div class="ItemLenguaje__text">
						<h3>
							${item.title}
						</h3>
						<p>
							${item.description}
						</p>
					</div>
				</div>`
}