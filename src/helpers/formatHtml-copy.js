/* eslint-disable no-use-before-define */
export default function format(html = '') {
  const fixImg = noClosedTags(html);
  const noFooter = removeCommonFooter(fixImg);
  const noComment = removeCommentTags(noFooter);
  const noAutoClosed = removeAutoclosedTags(noComment);
  const htmls = transformToJSX(noAutoClosed);
  return formattingTag(htmls);
}

export function transformToJSX(html = '') {
  // El elemento br <br> no tiene etiqueta de cierre, lo reemplazo por /n
  let filteredHtml = html.replace(/<br>/g, '');
  // Transformo codigo html:
  filteredHtml = filteredHtml.replace(/&#91;/g, '[').replace(/&gt;/g, '>');
  return `<html>${filteredHtml.replace(/&nbsp;/g, '')}</html>`;
}

export function removeCommentTags(section = '') {
  // Los comentarios html tienen forma <!-- comment... -->
  let newSection = section;
  while (newSection.includes('<!--')) {
    const first = newSection.indexOf('<!--');
    const last = newSection.indexOf('-->', first);
    const comment = newSection.slice(first, last + 3);
    newSection = newSection.replace(comment, '');
  }
  return newSection;
}

export function removeCommonFooter(section = '') {
  // Los posts tienen un footer en comun, que arrancan con el comentario:
  const initFooter = '<!-- wp:image {"align":"center","id":64,"width":93,"height":111,"sizeSlug":"full","linkDestination":"none"} -->';
  if (section.includes(initFooter)) {
    return section.substring(0, section.indexOf(initFooter));
  }
  return section;
}

function noClosedTags(section = '') {
  // Funcion para corregir etiquetas sin cierre JSX
  // Con las que hay problema son img: <img ... >, no tienen cierre JSX
  let returnedSection = section;

  let position = 0;
  while (position !== -1) {
    const i1 = returnedSection.indexOf('<img', position);
    if (i1 === -1) break;
    const i2 = returnedSection.indexOf('>', i1);
    if (i2 !== returnedSection.indexOf('/>', i1) + 1) {
      returnedSection = `${returnedSection.slice(0, i2)}/${returnedSection.slice(i2)}`;
    }
    position = i2;
  }

  return returnedSection;
}

export function removeAutoclosedTags(section = '') {
  // Funcion para remover directamente los tags que se autocierran
  let returnedSection = section;

  while (returnedSection.includes('/>')) {
    const closedIndex = returnedSection.indexOf('/>');
    const openIndex = returnedSection.lastIndexOf('<', closedIndex);

    const type = isATag(returnedSection.slice(openIndex, closedIndex + 1));

    returnedSection = returnedSection.replace('/>', `></${type}>`);
  }

  return returnedSection;
}

// 2do Intento:

function isATag(section = '') {
  // Funcion que verifica si es un tag y retorna el tipo de tag
  // se le pasa una seccion con inicio < y final >
  // Los tags son de la forma <type> o <type propertys.. >, si tiene la forma < asd > es invalido.
  if (section[1] === ' ') return null;
  if (section[1] === '/') return null;

  let type = section.slice(1, section.length - 1);
  type = type.includes(' ') ? type.split(' ')[0] : type;
  return type;
}

function searchTag(document = '') {
  // Solo una idea:
  let html = document;
  html = html
    .replace(/<div/g, '<View').replace(/<\/div>/g, '</View>')
    .replace(/<p/g, '<Text').replace(/<\/p>/g, '</Text>')
    .replace(/<strong/g, '<Text').replace(/<\/strong>/g, '</Text>')
    .replace(/<div/g, '<View');
  /*
  while (true) {
    const index1 = html.indexOf('<', position);
    if (index1 === -1) break;
    const index2 = html.indexOf('>', index1);
    const type = isATag(html.slice(index1, index2 + 1));
    const fullType = html.slice(index1 + 1, index2);
    switch (type) {
      case 'div':
        html = html.replace(/<br>/g, '');
        break;
        default:
          html = html.replace(/<br>/g, '');
          break;
        }
      }
  */
  console.log(html);
  return html;
}

export function formattingTag(html = '') {
  if (!html.includes('</')) { return null; }
  const i1 = html.indexOf('<');
  const i2 = html.lastIndexOf('>');
  // Aseguro que sea JSX
  return searchTag(html.slice(i1, i2 + 1))[0];
}
