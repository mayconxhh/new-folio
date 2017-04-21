import yo from 'yo-yo'

export default function(contentBlog){

	var content = document.createElement('div')
	content.setAttribute('class', 'Page__container')
	content.innerHTML = contentBlog

	return yo`<div class="Page">
					<div class="Page__container Container" id="container">
						${content}
					</div>
				</div> `
}