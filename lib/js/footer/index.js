import yo from 'yo-yo'

var el = yo`<footer class="Footer">
				<div class="Footer__container Container">
					<div class="Footer__top">
						<div class="Footer__top__left">
							<h3 class="footer-social-title">Mis Redes Sociales</h3>
							<ul class="social">
								<li><a href="http://facebook.com/mayconxhh" target="_blank"><img src="/images/icons/facebook.svg" width="40" /></a></li>
								<li><a href="http://twitter.com/mayconxhh" target="_blank"><img src="/images/icons/twitter.svg" width="40" /></a></li>
								<li><a href="http://github.com/mayconxhh" target="_blank"><img src="/images/icons/github.svg" width="40" /></a></li>
								<li><a href="http://youtube.com/mayconxhh" target="_blank"><img src="/images/icons/youtube.svg" width="40" /></a></li>
								<li><a href="http://linkedin.com/" target="_blank"><img src="/images/icons/linkedin.svg" width="40" /></a></li>
								<li><a href="http://instagram.com/mayconxhh" target="_blank"><img src="/images/icons/instagram.svg" width="40" /></a></li>
								<li><a href="https://plus.google.com/u/0/114166151230709010639" target="_blank"><img src="/images/icons/google-plus.svg" width="40" /></a></li>
							</ul>
						</div>
						<div class="Footer__top__center">
							<h3 class="title">Enlaces</h3>
							<ul>
								<li><a href="/sobre-mi">Sobre mí</a></li>
								<li><a href="/portafolio">Portafolio</a></li>
								<li><a href="/contactame">Contactame</a></li>
							</ul>
						</div>
						<div class="Footer__top__right">
							<h3 class="title">Maycon X. Huayapa H.</h3>
							<p class="text">
								Frontend Developer, futuro Full-Stack, co-founder y CTO de <a href="http://twitter.com/teamcromlu">@TeamCromlu</a> me apasiona programar, me gusta conocer de nuevas tecnologías.   
							</p>
						</div>
					</div>
					<div class="Footer__bottom">
						<div class="Footer__bottom__first">© ${new Date().getFullYear()} <a href="/about-me">Maycon X. Huayapa Huaman</a> All rights reserved.</div>
						<div class="Footer__bottom__second">
							<a href="/">  <img src="/images/icons/code.svg" width="15" />  <span>with</span>  <img src="/images/icons/heart.svg" width="13"/>  <span>by Mayconxhh</span></a>
						</div>
					</div>
				</div>
			</footer>`


document.body.appendChild(el)