/* eslint-disable no-use-before-define */
export default function format(html = '') {
  const htmls = transformToJSX(html);
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
    if (childInd !== -1) {
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