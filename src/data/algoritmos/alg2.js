export default `
<article class="post-109 post type-post status-publish format-standard hentry category-condicionales tag-impar tag-numeros tag-par tag-python user-has-not-earned" id="post-109">

	
<header class="entry-header has-text-align-center header-footer-group">

	<div class="entry-header-inner section-inner medium">

		
			<div class="entry-categories">
				<span class="screen-reader-text">Categorías</span>
				<div class="entry-categories-inner">
					<a href="https://algoritmopedia.org/index.php/category/condicionales/" rel="category tag">Condicionales</a>				</div>
			</div>

			<h1 class="entry-title">¿Cómo saber si un número es par o impar?</h1>
		<div class="post-meta-wrapper post-meta-single post-meta-single-top">

			<ul class="post-meta">

									<li class="post-author meta-wrapper">
						<span class="meta-icon">
							<span class="screen-reader-text">Autor de la entrada</span>
							<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20"><path fill="" d="M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"></path></svg>						</span>
						<span class="meta-text">
							Por <a href="https://algoritmopedia.org/index.php/author/algoritmopedia/">Algoritmopedia</a>						</span>
					</li>
										<li class="post-date meta-wrapper">
						<span class="meta-icon">
							<span class="screen-reader-text">Fecha de la entrada</span>
							<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"><path fill="" d="M4.60069444,4.09375 L3.25,4.09375 C2.47334957,4.09375 1.84375,4.72334957 1.84375,5.5 L1.84375,7.26736111 L16.15625,7.26736111 L16.15625,5.5 C16.15625,4.72334957 15.5266504,4.09375 14.75,4.09375 L13.3993056,4.09375 L13.3993056,4.55555556 C13.3993056,5.02154581 13.0215458,5.39930556 12.5555556,5.39930556 C12.0895653,5.39930556 11.7118056,5.02154581 11.7118056,4.55555556 L11.7118056,4.09375 L6.28819444,4.09375 L6.28819444,4.55555556 C6.28819444,5.02154581 5.9104347,5.39930556 5.44444444,5.39930556 C4.97845419,5.39930556 4.60069444,5.02154581 4.60069444,4.55555556 L4.60069444,4.09375 Z M6.28819444,2.40625 L11.7118056,2.40625 L11.7118056,1 C11.7118056,0.534009742 12.0895653,0.15625 12.5555556,0.15625 C13.0215458,0.15625 13.3993056,0.534009742 13.3993056,1 L13.3993056,2.40625 L14.75,2.40625 C16.4586309,2.40625 17.84375,3.79136906 17.84375,5.5 L17.84375,15.875 C17.84375,17.5836309 16.4586309,18.96875 14.75,18.96875 L3.25,18.96875 C1.54136906,18.96875 0.15625,17.5836309 0.15625,15.875 L0.15625,5.5 C0.15625,3.79136906 1.54136906,2.40625 3.25,2.40625 L4.60069444,2.40625 L4.60069444,1 C4.60069444,0.534009742 4.97845419,0.15625 5.44444444,0.15625 C5.9104347,0.15625 6.28819444,0.534009742 6.28819444,1 L6.28819444,2.40625 Z M1.84375,8.95486111 L1.84375,15.875 C1.84375,16.6516504 2.47334957,17.28125 3.25,17.28125 L14.75,17.28125 C15.5266504,17.28125 16.15625,16.6516504 16.15625,15.875 L16.15625,8.95486111 L1.84375,8.95486111 Z"></path></svg>						</span>
						<span class="meta-text">
							<a href="https://algoritmopedia.org/index.php/2022/06/09/parimpar/">9 de junio de 2022</a>
						</span>
					</li>
										<li class="post-comment-link meta-wrapper">
						<span class="meta-icon">
							<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path d="M9.43016863,13.2235931 C9.58624731,13.094699 9.7823475,13.0241935 9.98476849,13.0241935 L15.0564516,13.0241935 C15.8581553,13.0241935 16.5080645,12.3742843 16.5080645,11.5725806 L16.5080645,3.44354839 C16.5080645,2.64184472 15.8581553,1.99193548 15.0564516,1.99193548 L3.44354839,1.99193548 C2.64184472,1.99193548 1.99193548,2.64184472 1.99193548,3.44354839 L1.99193548,11.5725806 C1.99193548,12.3742843 2.64184472,13.0241935 3.44354839,13.0241935 L5.76612903,13.0241935 C6.24715123,13.0241935 6.63709677,13.4141391 6.63709677,13.8951613 L6.63709677,15.5301903 L9.43016863,13.2235931 Z M3.44354839,14.766129 C1.67980032,14.766129 0.25,13.3363287 0.25,11.5725806 L0.25,3.44354839 C0.25,1.67980032 1.67980032,0.25 3.44354839,0.25 L15.0564516,0.25 C16.8201997,0.25 18.25,1.67980032 18.25,3.44354839 L18.25,11.5725806 C18.25,13.3363287 16.8201997,14.766129 15.0564516,14.766129 L10.2979143,14.766129 L6.32072889,18.0506004 C5.75274472,18.5196577 4.89516129,18.1156602 4.89516129,17.3790323 L4.89516129,14.766129 L3.44354839,14.766129 Z"></path></svg>						</span>
						<span class="meta-text">
							<a href="https://algoritmopedia.org/index.php/2022/06/09/parimpar/#respond">No hay comentarios<span class="screen-reader-text"> en ¿Cómo saber si un número es par o impar?</span></a>						</span>
					</li>
					
			</ul>

		</div>

		
	</div>

</header>

	<div class="post-inner thin ">

		<div class="entry-content">

			
<p><strong>Fuente: Juan Ramírez | Verificado por: Maximiliano Vasques</strong></p>



<p>Para saber si un número es par (0,2,4,6, etc.) se puede dividir y en caso que el resto sea 0, significa que es un número par.</p>



<h5><strong>– Solución en Python</strong></h5>



<pre class="wp-block-code has-text-color has-background" style="background-color:#252525;color:#8bff59"><code><em>#Se pide el número como tipo de dato decimal/flotante
</em>num = float(input("Ingrese un número:  "))

<em>#Si numero modulo 2 es igual a 0 entonces...
</em>if num % 2 == 0:
<em>#Imprimir el siguiente texto
</em>  print(f"El número {num} es par")
<em>#Si no...
</em>else:
  print(f"El número {num} es impar")</code></pre>



<p><strong>– ¿En qué se usa este algoritmo?</strong></p>



<p>Estudiar: Es muy práctico para aprender como funcionan los condicionales.</p>


<div class="wp-block-image">
<figure class="aligncenter size-full is-resized"><img src="https://i0.wp.com/algoritmopedia.org/wp-content/uploads/2022/06/matecodigo.png?resize=93%2C111&amp;ssl=1" alt="" class="wp-image-64" width="93" height="111" srcset="https://i0.wp.com/algoritmopedia.org/wp-content/uploads/2022/06/matecodigo.png?w=453&amp;ssl=1 453w, https://i0.wp.com/algoritmopedia.org/wp-content/uploads/2022/06/matecodigo.png?resize=251%2C300&amp;ssl=1 251w" sizes="(max-width: 93px) 100vw, 93px"></figure></div>


<div class="wp-container-2 wp-block-buttons">
<div class="wp-block-button aligncenter is-style-fill"><a class="wp-block-button__link" href="https://es.wikipedia.org/wiki/N%C3%BAmeros_pares_e_impares" style="border-radius:30px" target="_blank" rel="https://es.wikipedia.org/wiki/N%C3%BAmeros_pares_e_impares noopener">Contenido relacionado</a></div>



<div class="wp-block-button aligncenter has-custom-font-size is-style-fill" style="font-size:13px"><a class="wp-block-button__link has-background" href="https://docs.google.com/forms/d/e/1FAIpQLSfd323My1ZYLTv_-bEYdzGpSsPR5NGWIPiYzIkz7UhLq-sDWQ/viewform?usp=sf_link" style="border-radius:30px;background-color:#f08484" target="_blank" rel="https://es.wikipedia.org/wiki/N%C3%BAmeros_pares_e_impares noopener">Corregir este aporte</a></div>
</div>


<nav class="jp-relatedposts-i2 wp-block-jetpack-related-posts" data-layout="grid"><div class="jp-related-posts-i2__row" data-post-count="3"><ul id="related-posts-item-62e2b76e0aab8" aria-labelledby="related-posts-item-62e2b76e0aab8-label" class="jp-related-posts-i2__post" role="menuitem"><li class="jp-related-posts-i2__post-link"><a id="related-posts-item-62e2b76e0aab8-label" href="https://algoritmopedia.org/index.php/2022/06/27/como-calcular-la-media-geometrica-con-python/">¿Cómo calcular la media geométrica con Python?</a></li></ul><ul id="related-posts-item-62e2b76e0aae0" aria-labelledby="related-posts-item-62e2b76e0aae0-label" class="jp-related-posts-i2__post" role="menuitem"><li class="jp-related-posts-i2__post-link"><a id="related-posts-item-62e2b76e0aae0-label" href="https://algoritmopedia.org/index.php/2022/06/28/como-calcular-un-promedio-con-python/">¿Cómo calcular un promedio con Python?</a></li></ul><ul id="related-posts-item-62e2b76e0aafd" aria-labelledby="related-posts-item-62e2b76e0aafd-label" class="jp-related-posts-i2__post" role="menuitem"><li class="jp-related-posts-i2__post-link"><a id="related-posts-item-62e2b76e0aafd-label" href="https://algoritmopedia.org/index.php/2022/06/10/contar-atras/">¿Cómo contar hacia atrás con funciones?</a></li></ul></div></nav>
		</div>

	</div>

	<div class="section-inner">
		
		<div class="post-meta-wrapper post-meta-single post-meta-single-bottom">

			<ul class="post-meta">

									<li class="post-tags meta-wrapper">
						<span class="meta-icon">
							<span class="screen-reader-text">Etiquetas</span>
							<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="" d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"></path></svg>						</span>
						<span class="meta-text">
							<a href="https://algoritmopedia.org/index.php/tag/impar/" rel="tag">impar</a>, <a href="https://algoritmopedia.org/index.php/tag/numeros/" rel="tag">numeros</a>, <a href="https://algoritmopedia.org/index.php/tag/par/" rel="tag">par</a>, <a href="https://algoritmopedia.org/index.php/tag/python/" rel="tag">python</a>						</span>
					</li>
					
			</ul>

		</div>

		
	</div>

	
	<nav class="pagination-single section-inner only-one only-next" aria-label="Entrada">

		<hr class="styled-separator is-style-wide" aria-hidden="true">

		<div class="pagination-single-inner">

			
				<a class="next-post" href="https://algoritmopedia.org/index.php/2022/06/10/contar-atras/">
					<span class="arrow" aria-hidden="true">→</span>
						<span class="title"><span class="title-inner">¿Cómo contar hacia atrás con funciones?</span></span>
				</a>
				
		</div>

		<hr class="styled-separator is-style-wide" aria-hidden="true">

	</nav>

	
		<div class="comments-wrapper section-inner">

				<div id="respond" class="comment-respond">
		<h2 id="reply-title" class="comment-reply-title">Deja una respuesta <small><a rel="nofollow" id="cancel-comment-reply-link" href="/index.php/2022/06/09/parimpar/#respond" style="display:none;">Cancelar la respuesta</a></small></h2><form action="https://algoritmopedia.org/wp-comments-post.php" method="post" id="commentform" class="section-inner thin max-percentage" novalidate=""><p class="comment-notes"><span id="email-notes">Tu dirección de correo electrónico no será publicada.</span> <span class="required-field-message" aria-hidden="true">Los campos obligatorios están marcados con <span class="required" aria-hidden="true">*</span></span></p><p class="comment-form-comment"><label for="comment">Comentario <span class="required" aria-hidden="true">*</span></label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required=""></textarea></p><p class="comment-form-author"><label for="author">Nombre <span class="required" aria-hidden="true">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" required=""></p>
<p class="comment-form-email"><label for="email">Correo electrónico <span class="required" aria-hidden="true">*</span></label> <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required=""></p>
<p class="comment-form-url"><label for="url">Web</label> <input id="url" name="url" type="url" value="" size="30" maxlength="200"></p>
<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"> <label for="wp-comment-cookies-consent">Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label></p>
<p class="form-submit">	</p><div class="h-captcha" data-sitekey="89f8c107-36e0-4e46-bc03-c60151f4b0a8" data-theme="light" data-size="normal" data-auto="false">
	<iframe src="https://newassets.hcaptcha.com/captcha/v1/335f764/static/hcaptcha.html#frame=checkbox&amp;id=0gh0zhcczuyw&amp;host=algoritmopedia.org&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=es&amp;tplinks=on&amp;sitekey=89f8c107-36e0-4e46-bc03-c60151f4b0a8&amp;theme=light&amp;size=normal" title="widget containing checkbox for hCaptcha security challenge" tabindex="0" frameborder="0" scrolling="no" data-hcaptcha-widget-id="0gh0zhcczuyw" data-hcaptcha-response="" style="width: 303px; height: 78px; overflow: hidden;"></iframe><textarea id="h-captcha-response-0gh0zhcczuyw" name="h-captcha-response" style="display: none;"></textarea></div>
	<input type="hidden" id="hcaptcha_comment_form_nonce" name="hcaptcha_comment_form_nonce" value="4e8d452fe2"><input type="hidden" name="_wp_http_referer" value="/index.php/2022/06/09/parimpar/"><input name="submit" type="submit" id="submit" class="submit" value="Publicar el comentario"> <input type="hidden" name="comment_post_ID" value="109" id="comment_post_ID">
<input type="hidden" name="comment_parent" id="comment_parent" value="0">
<p></p><p style="display: none !important;"><label>Δ<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="ak_js" value="1659025923897"><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p></form>	</div>
	
		</div>

		
</article>
`;
