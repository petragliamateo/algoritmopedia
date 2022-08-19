

## Storage
  en src/storage se encuentran los archivos dedicados a esto.
  Hook useMovileStorage: Hook personalizado que utiliza la libreria AsyncStorage. devuelve un objeto con varios metodos y propiedades relacionados con el storage para esta aplicacion, como los datos de los algoritmos y paginas, y funciones para eliminar o recargar estos datos.

## Push Notifications
  en src/notifications estan los archivos dedicados a estos.
  notificationGetToken es una funcion que genera un token unico usando la biblioteca expo-notifications, usando este token podemos mandar push notifications desde nuestro backend con la libreria sdk server de expo.
  sheudleNotification es una funcion que genera en determinado tiempo una notificacion directamente desde el frontend.
  useNotificationListener es un hook personalizado que crea unos listener para poder recibir notificaciones cuando la app se encuentra abierta o cerrada. Ademas genera el token usando la funcion previa y lo retorna.
  useNotificationWhenOpenApp es un hook que crea una notificacion pasados los 10 minutos de abrir la app, si la app se abre mas de una vez en menos de 10 minutos no genera notificaciones de mas.

## Services
  Usando la libreria axios nos conectamos al backend, realizando solicitudes GET. Asi conseguimos los datos. Tambien se realiza la solicitud POST para postear el push token.

