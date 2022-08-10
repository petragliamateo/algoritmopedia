/* eslint-disable no-case-declarations */
export default function categorySwitch(categoria, algoritmos, setterFunction) {
  // Pasar a que esto sea parte del backend, para no tener que actualizar la app constantemente
  // Subir en api una seccion con el array de todas las categorias, siendo estas objetos:
  // { name: 'Condicionales', childs: ['parimpar', 'contar-atras'] }
  // Con esto:
  // import ... from './services'
  switch (categoria) {
    case 'Condicionales':
      const condicionales = algoritmos.filter((alg) => (
        alg.post_name === 'parimpar'
        || alg.post_name === 'contar-atras'
      ));
      setterFunction(condicionales);
      break;

    default:
      break;
  }
}
