/* eslint-disable no-use-before-define */
export default function format(html = '') {
  const noFooter = removeCommonFooter(html);
  const noComment = removeCommentTags(noFooter);
  const htmls = transformToJSX(noComment);
  return formattingTag(htmls);
}

function transformToJSX(html = '') {
  return `<html>${html}</html>`;
}

export function formattingTag(section) {
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
  tag.type = type;

  const lastIndex = section.indexOf(`</${type}`);
  // Si section no es tag ==> retorno null.
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
