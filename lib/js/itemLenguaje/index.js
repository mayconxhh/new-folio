import yo from 'yo-yo'

export default function(item){
	return yo`<div class="caja1">
					<img src="${item.image}" class="imag1" width="150" height="150">
					<h3>
						${item.title}
					</h3>
					<p>
						${item.description}
					</p>
				</div>`
}