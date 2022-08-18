import * as Notifications from 'expo-notifications';

export default async function schedulePushNotification(segundos = 600) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Nueva Notificacion! 📬',
      body: 'Listo para aprender nuevos algoritmos?',
      data: { data: 'goes here' },
    },
    trigger: { seconds: segundos },
  });
}
