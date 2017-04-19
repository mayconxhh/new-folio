import yo from 'yo-yo'
import biografy from '../biografy'
import myInfo from '../myInfo'
import preparation from '../preparation'
import portafolio from '../portafolio'

export default function(Lenguajes, Proyects){

	return yo`<div>
					${biografy()}
					${myInfo()}
					${preparation(Lenguajes)}
					${portafolio(Proyects)}
				</div> `
}