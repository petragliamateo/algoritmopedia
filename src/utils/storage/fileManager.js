/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import * as FileSystem from 'expo-file-system';

const directory = `${FileSystem.cacheDirectory}algoritmopedia/`;

// Funcion que se le pasa como arg. la url de una imagen, la descarga y devuelve el path del archivo
async function downloadFile(url = '', fileName = 'default.png') {
  await ensureDirExists();

  const fileUri = `${directory}${fileName}`;
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  // Si no existe el archivo --> lo descarga
  if (!fileInfo.exists) {
    console.log(`Downloading ${fileName}...`);
    await FileSystem.downloadAsync(url, fileUri);
  }
  console.log(fileUri);
  return fileUri;
}

// Helper func para ver si el directiorio existe y si no crea uno:
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(directory);
  if (!dirInfo.exists) {
    console.log("directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
  }
}

async function deleteFile(fileName = 'default.png') {
  console.log(`Deleting ${fileName}...`);
  await FileSystem.deleteAsync(`${directory}${fileName}`);
}

async function deleteAll() {
  console.log('Deleting all files...');
  await FileSystem.deleteAsync(directory);
}

function getPath(src = 'https://default.png') {
  const nameI1 = src.lastIndexOf('/');
  const fileName = src.slice(nameI1 + 1);
  const fileUri = `${directory}${fileName}`;
  return fileUri;
}

export default {
  downloadFile, deleteFile, deleteAll, getPath,
};
