// Si format se lleva al backend, esto tambien.
export default function contenidoRelacionado(content = '') {
  // Funcion que toma un content (como los de wp) y devuelve el link de la seccion ContRel.
  // En todos los posts se ve una similitud en este boton, de etiqueta a:
  // <a ...>Contenido relacionado</a>
  // la etiqueta tiene la propiedad: href="https..."
  // Ademas esto pertenece al footer que substraigo en format(), por lo que tomo el ultimo valor:
  const lastIndex = content.lastIndexOf('>Contenido relacionado</a>');
  if (lastIndex === -1) return null;
  const i1 = content.lastIndexOf('href=', lastIndex);
  const i2 = content.indexOf(' ', i1);
  const url = content.slice(i1 + 'href="'.length, i2 - 1);
  return url;
}
