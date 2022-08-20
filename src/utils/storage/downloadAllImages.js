/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import fileManager from './fileManager';

export default async function downloadAllImages(algoritmosDocs = []) {
  algoritmosDocs.forEach((doc) => {
    const allSrcs = arrayOfImgSrcs(doc);
    console.log(allSrcs);
    allSrcs.forEach((obj) => {
      fileManager.downloadFile(obj.src, obj.name);
    });
  });
}

function arrayOfImgSrcs(document = '') {
  // Funcion que busca img tags de un dcumento y devuelve un array con todos sus urls
  const returnedSection = [];

  let position = 0;
  while (position !== -1) {
    const imgI1 = document.indexOf('<img', position);
    if (imgI1 === -1) break;
    const imgI2 = document.indexOf('>', imgI1);
    const fullType = document.slice(imgI1, imgI2);

    const srcI1 = fullType.indexOf('src=');
    const srcI2 = fullType.indexOf('"', srcI1 + 5);
    const src = fullType.slice(srcI1 + 5, srcI2);
    if (src) {
      const nameI1 = src.lastIndexOf('/');
      const name = src.slice(nameI1 + 1);
      returnedSection.push({ src, name });
    }

    position = imgI2;
  }

  console.log(returnedSection);

  return returnedSection;
}
