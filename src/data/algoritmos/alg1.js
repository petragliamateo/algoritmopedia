export default `
<p><strong>Fuente: Juan Ramírez | Verificado por: <strong>Maximiliano Vasques</strong></strong></p>



<p>Para saber el promedio de un número “x” de variables, se tienen que sumar entre si, y luego se dividen por el número de la cantidad de variables que hay a promediar.</p>



<p><strong>Ingreso de datos:</strong></p>



<p>Se ingresan en este caso 3 números enteros a 3 variables.</p>



<p><strong>Asignación de variable resultado:</strong></p>



<p>“resultado” almacena el valor de la suma de “numero1” más “numero2” más “numero3”.</p>



<p><strong>Asignación a variable promedio:</strong></p>



<p>“promedio” almacena el valor de “resultado” dividido por 3. (3 en este caso ya que son la cantidad de variables a calcular).</p>



<p><strong>Devolver el resultado:</strong></p>



<p>Se utiliza “print()”.</p>



<pre class="wp-block-code has-text-color has-background" style="background-color:#252525;color:#8bff59"><code>numero1 = int(input("ingrese su primer número: "))
numero2 = int(input("ingrese su segundo número: "))
numero3 = int(input("ingrese su tercer número: "))
resultado = numero1 + numero2 + numero3
promedio = resultado/3
print(f"El promedio es {promedio}")</code></pre>
`;
