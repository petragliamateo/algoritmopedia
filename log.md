## Storage
  en src/utils/storage se encuentran los archivos dedicados a esto.
  Hook useMovileStorage: Hook personalizado que utiliza la libreria AsyncStorage. devuelve un objeto con varios metodos y propiedades relacionados con el storage para esta aplicacion, como los datos de los algoritmos y paginas, y funciones para eliminar o recargar estos datos. Tambien descarga todas las imagenes de los algoritmos para poder verlos sin conexion.
  fileManager: conjunto de funciones que utilizan la libreria expo-file-system, entre estas funciones estan downloadFile, que descarga un archivo especificando la url y el nombre a definir, deleteFile para eliminar o deleteAllFiles que elimina el directorio. Todos los archivos descargados se guardan en un directorio que se crea la primera vez que se descarga un archivo.
  downloadAllImages: funcion que se le pasa el array con todos los documentos html de los algoritmos o paginas y descarga todas las imagenes.

## Push Notifications
  en src/notifications estan los archivos dedicados a estos.
  notificationGetToken es una funcion que genera un token unico usando la biblioteca expo-notifications, usando este token podemos mandar push notifications desde nuestro backend con la libreria sdk server de expo.
  sheudleNotification es una funcion que genera en determinado tiempo una notificacion directamente desde el frontend.
  useNotificationListener es un hook personalizado que crea unos listener para poder recibir notificaciones cuando la app se encuentra abierta o cerrada. Ademas genera el token usando la funcion previa y lo retorna.
  useNotificationWhenOpenApp es un hook que crea una notificacion pasados los 10 minutos de abrir la app, si la app se abre mas de una vez en menos de 10 minutos no genera notificaciones de mas.

## Services
  Usando la libreria axios nos conectamos al backend, realizando solicitudes GET. Asi conseguimos los datos. Tambien se realiza la solicitud POST para postear el push token.

