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
  const html = document;

  // Primer tag
  const index1 = html.indexOf('<');
  const index2 = html.indexOf('>', index1);
  const type = isATag(html.slice(index1, index2 + 1));
  // Si no es tag, retorno {content}
  if (!type) return [{ content: html }];
  const fullType = html.slice(index1 + 1, index2);

  const closeTag = `</${type}>`;
  let closeTagIndex = html.indexOf(closeTag); // Debe ser el ultimo (while)
  let content = html.slice(index2 + 1);
  let position = index2;
  while (true) {
    closeTagIndex = html.indexOf(closeTag, position);
    if (closeTagIndex === -1) closeTagIndex = 0;
    content = html.slice(index2 + 1, closeTagIndex);
    if (!content.includes(`<${type}`, position - html.indexOf(content))) {
      // La posicion real a contar a partir de content es position menos su posicion
      // Ya que position se mide a partir de html, y es relativo a content.
      break;
    }
    // else: (content incluye un <type> igual)
    // position = content.indexOf(`<${type}`) + 1;
    position = closeTagIndex + 1;
  }

  // Si document no arranca con tag, retorno content hasta el tag
  const returnArray = [];
  if (index1 !== 0) returnArray.push({ content: html.slice(0, index1) });
  // retorno like child
  // No puedo llamar fotmattingTag3 aca, entonces creo una adaptacion:
  const contentObj = { type, fullType, children: [] };
  contentObj.children = searchTag(content);
  returnArray.push(contentObj);

  const lastIndex = closeTagIndex + type.length + 3;
  if (lastIndex !== html.length) {
    const lastPart = searchTag(html.slice(lastIndex));
    lastPart.forEach((element) => {
      returnArray.push(element);
    });
  }

  return returnArray;
}

export function formattingTag(html = '') {
  if (!html.includes('</')) { return null; }
  const i1 = html.indexOf('<');
  const i2 = html.lastIndexOf('>');
  // Aseguro que sea JSX
  return searchTag(html.slice(i1, i2 + 1))[0];
}
