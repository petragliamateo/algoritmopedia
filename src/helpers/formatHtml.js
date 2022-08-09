/* eslint-disable no-use-before-define */
export default function format(html = '') {
  const noFooter = removeCommonFooter(html);
  const noComment = removeCommentTags(noFooter);
  const noAutoClosed = removeAutoclosedTags(noComment);
  const htmls = transformToJSX(noAutoClosed);
  return formattingTag(htmls);
}

export function transformToJSX(html = '') {
  return `<html>${html.replace(/&nbsp;/g, '')}</html>`;
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
  console.log('FULLTYPE: ', fullType, '--> Type: ', type);

  const closeTag = `</${type}>`;
  let closeTagIndex = html.indexOf(closeTag); // Debe ser el ultimo (while)
  let content = html.slice(index2 + 1);
  let position = index2;
  while (true) {
    closeTagIndex = html.indexOf(closeTag, position);
    if (closeTagIndex === -1) closeTagIndex = 0;
    content = html.slice(index2 + 1, closeTagIndex);
    console.log(content, `type: ${type}`);
    if (!content.includes(`<${type}`, position - html.indexOf(content))) {
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
  const contentObj = { type, children: [] };
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
