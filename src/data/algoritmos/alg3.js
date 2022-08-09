export default `
<!-- wp:paragraph -->\n<p><strong>Fuente: Juan Ramírez | Verificado por: <strong>Maximiliano Vasques</strong></strong></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"border\":{\"radius\":\"30px\"},\"typography\":{\"fontSize\":\"10px\"}},\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button has-custom-font-size is-style-outline\" style=\"font-size:10px\"><a class=\"wp-block-button__link\" style=\"border-radius:30px\"><strong>PYTHON</strong></a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->\n\n<!-- wp:separator {\"align\":\"center\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator aligncenter has-alpha-channel-opacity is-style-wide\"/>\n<!-- /wp:separator -->\n\n<!-- wp:paragraph -->\n<p><em>El&nbsp;<strong>ordenamiento de burbuja</strong>&nbsp;(<strong>Bubble Sort</strong>&nbsp;en inglés) es un sencillo&nbsp;<a href=\"https://es.wikipedia.org/wiki/Algoritmo_de_ordenamiento\">algoritmo de ordenamiento</a>. Funciona revisando cada elemento de la lista que va a ser ordenada con el siguiente, intercambiándolos de posición si están en el orden equivocado. Es necesario revisar varias veces toda la lista hasta que no se necesiten más intercambios, lo cual significa que la lista está ordenada.</em></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><strong>Fuente: </strong><a href=\"https://es.wikipedia.org/wiki/Ordenamiento_de_burbuja\" target=\"_blank\" rel=\"noreferrer noopener\">https://es.wikipedia.org/wiki/Ordenamiento_de_burbuja</a></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:separator {\"align\":\"center\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator aligncenter has-alpha-channel-opacity is-style-wide\"/>\n<!-- /wp:separator -->\n\n<!-- wp:code {\"style\":{\"color\":{\"background\":\"#252525\",\"text\":\"#8bff59\"}}} -->\n<pre class=\"wp-block-code has-text-color has-background\" style=\"background-color:#252525;color:#8bff59\"><code>vec = &#91;5, 2, 3, 1, 4]\n\n#El len a vec hace que sea adaptable al tamaño que podría tener la lista\nfor i in range(len(vec)+ 1):\n#Sirve para tomar el anterior número para posteriormente compararlo\n    for x in range(len(vec)- i - 1):\n        #Intercambio\n        if vec&#91;x] &gt; vec&#91;x + 1]:\n            print(vec)\n            aux = vec&#91;x]\n            vec&#91;x] = vec&#91;x + 1]\n            vec&#91;x + 1] = aux\n\nprint(vec)</code></pre>\n<!-- /wp:code -->\n\n<!-- wp:image {\"align\":\"center\",\"sizeSlug\":\"large\"} -->\n<figure class=\"wp-block-image aligncenter size-large\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif\" alt=\"\"/><figcaption>Fuente: Wikipedia</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:image {\"align\":\"center\",\"id\":64,\"width\":93,\"height\":111,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image aligncenter size-full is-resized\"><img src=\"https://algoritmopedia.org/wp-content/uploads/2022/06/matecodigo.png\" alt=\"\" class=\"wp-image-64\" width=\"93\" height=\"111\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"align\":\"center\",\"style\":{\"border\":{\"radius\":\"30px\"}},\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button aligncenter is-style-fill\"><a class=\"wp-block-button__link\" href=\"https://www.youtube.com/watch?v=pqZ04TT15PQ\" style=\"border-radius:30px\" target=\"_blank\" rel=\"noreferrer noopener\">Contenido relacionado</a></div>\n<!-- /wp:button -->\n\n<!-- wp:button {\"align\":\"center\",\"style\":{\"border\":{\"radius\":\"30px\"},\"color\":{\"background\":\"#f08484\"},\"typography\":{\"fontSize\":\"13px\"}},\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button aligncenter has-custom-font-size is-style-fill\" style=\"font-size:13px\"><a class=\"wp-block-button__link has-background\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSfd323My1ZYLTv_-bEYdzGpSsPR5NGWIPiYzIkz7UhLq-sDWQ/viewform?usp=sf_link\" style=\"border-radius:30px;background-color:#f08484\" target=\"_blank\" rel=\"https://es.wikipedia.org/wiki/N%C3%BAmeros_pares_e_impares noopener\">Corregir este aporte</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->
`;