export default {
  info: 'Encuentra recursos hechos por la comunidad de programadores en internet, para profundizar en el mundo de la programación',
  lista: [
    {
      title: 'Lenguajes de programación:',
      id: 1,
      content: [
        {
          title: 'Python',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
          buttons: [
            { buttonTitle: 'Sintaxis Basica', url: '/' },
            { buttonTitle: 'Guias', url: '/' },
            { buttonTitle: 'Inteligencia Artificial', url: '/' },
          ],
        },
      ],
    },
    {
      title: 'GIT y Github:',
      id: 2,
      content: [{
        buttons: [{ buttonTitle: 'Lista de reproduccion', url: '/' }],
      }],
    },
    {
      title: 'Algoritmia:',
      id: 3,
      content: [
        {
          buttons: [{ buttonTitle: 'Algoritmos con Todo Code', url: '/' }],
        },
        {
          buttons: [{ buttonTitle: 'Algoritmos con Chio Code', url: '/' }],
        },
      ],
    },
  ],
};
