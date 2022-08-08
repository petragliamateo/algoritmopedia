/* eslint-disable no-use-before-define */
export default function format(html = '') {
  const noFooter = removeCommonFooter(html);
  const noComment = removeCommentTags(noFooter);
  const noAutoClosed = removeAutoclosedTags(noComment);
  const htmls = transformToJSX(noAutoClosed);
  return formattingTag(htmls);
}

export function transformToJSX(html = '') {
  return `<html>${html}</html>`;
}

export function formattingTagUnused(section) {
  // Funcion que devuelve un array de objetos
  // Cada objeto tiene su tipo y childrens
  // Por ejemplo tipo p, childrens: [texto, {objTag}, ...]
  // Los children son objeto tag
  // Solo anda para secciones JSX (1 solo parent)

  const tag = { type: '', children: [] };

  const index1 = section.indexOf('<');
  const index2 = section.indexOf('>');
  let type = section.slice(index1 + 1, index2);
  type = type.indexOf(' ') !== -1 ? type.split(' ')[0] : type;
  // console.log(type);
  tag.type = type;

  // Si section no es tag ==> retorno null.
  const lastIndex = section.indexOf(`</${type}`);
  if (lastIndex === -1) { return null; }

  let content = section.slice(index2 + 1, lastIndex);
  const lastEndIndex = section.lastIndexOf(`</${type}>`);
  const fullContent = section.slice(index2 + 1, lastEndIndex);
  while (content) {
    const sameInd = content.indexOf(`<${type}`);
    const childInd = content.indexOf('</');
    if (childInd === 0) { break; }
    if (sameInd === -1 && childInd === -1) {
      tag.children.push({ content });
      break;
    }
    if (sameInd !== -1) {
    // Si el tag cierra otro children del mismo type:
      content = `${content}</${type}>`;
    }
    if (childInd !== -1 && content.includes('<')) {
    // Si el tag contiene algun children (otro tag, puede ser el mismo tipo)
      const child = formattingTag(content);
      const start = `<${child.type}`;
      const unchildren = content.slice(0, content.indexOf(start));
      tag.children.push({ content: unchildren });
      tag.children.push(child);
      const end = `</${child.type}>`;
      const lastPart = content.slice(content.indexOf(end) + end.length);
      // Si era el mismo tipo entonces se borra la parte que le sigue, la completo:
      content = sameInd === -1
        ? lastPart
        : fullContent.slice(content.indexOf(end) + end.length);
    }
  }
  return tag;
}

export function removeCommentTags(section = '') {
  // Los comentarios html tienen forma <!-- comment... -->
  let newSection = section;
  while (newSection.includes('<!--')) {
    const first = newSection.indexOf('<!--');
    const last = newSection.indexOf('-->');
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

    const type = returnedSection.slice(openIndex + 1, closedIndex).split(' ')[0];

    returnedSection = returnedSection.replace('/>', `></${type}>`);
  }

  return returnedSection;
}

// 2do Intento:

export function formattingTag2(document) {
  // Esta vez, la manera de pensar es:
  // Agarro el primer tag, le asocio una dimension y lo remuevo del loop
  // Luego cada objeto con su dimension lo asocio con un unico objeto devuelto

  // Si document no es tag ==> retorno null.
  if (!document.includes('</')) { return null; }

  const html = document;
  const tag = { type: '', children: [] };

  const index1 = html.indexOf('<');
  const index2 = html.indexOf('>', index1);
  const type = isATag(html.slice(index1, index2 + 1));
  if (!type) return null;
  tag.type = type;

  // Si no es tag, retorno el objeto {content} (asi funciona el 2do children.push)

  let position = index2;
  while (true) {
    const closedTag = html.indexOf(`</${type}>`, position);
    const content = html.slice(index2 + 1, closedTag);
    if (!content.includes(`<${type}`, position)) {
      if (content.includes('<')) {
        // Error cuando hay contenido entre tags la funcion la tengo que llamar por cada tag
        tag.children.push({ content: content.slice(0, content.indexOf('<')) });
        tag.children.push(formattingTag2(content));
        tag.children.push({ content: content.slice(content.lastIndexOf('>') + 1) });
      } else {
        tag.children.push({ content });
      }
      break;
    }
    // else: (content incluye un <type> igual)
    position = closedTag + 1;
  }
  return tag;
}

function isATag(section = '') {
  // Funcion que verifica si es un tag y retorna el tipo de tag
  // se le pasa una seccion con inicio < y final >
  // Los tags son de la forma <type> o <type propertys.. >, si tiene la forma < asd > es invalido.
  if (section[1] === ' ') return null;

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

  const closeTag = `</${type}>`;
  let closeTagIndex = html.indexOf(closeTag); // Debe ser el ultimo (while)
  let content = html.slice(index1, closeTagIndex);
  let position = index2;
  while (true) {
    closeTagIndex = html.indexOf(`</${type}>`, position);
    content = html.slice(index2 + 1, closeTagIndex);
    if (!content.includes(`<${type}`, position)) {
      break;
    }
    // else: (content incluye un <type> igual)
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

export function formattingTag3(html = '') {
  if (!html.includes('</')) { return null; }

  const tag = { type: '', children: [] };

  const index1 = html.indexOf('<');
  const index2 = html.indexOf('>', index1);
  const type = isATag(html.slice(index1, index2 + 1));
  if (!type) return { content: html };
  tag.type = type;
  tag.children = searchTag(html);

  return tag;
}
