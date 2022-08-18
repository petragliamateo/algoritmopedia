import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import schedulePushNotification from './sheudleNotification';

const useNotificationWhenOpenApp = () => {
  const getNotificationData = async () => {
    try {
      const data = await AsyncStorage.getItem('@notiDate');
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      alert(error);
      return null;
    }
  };
  const saveNotificationData = async (data) => {
    try {
      await AsyncStorage.setItem('@notiDate', JSON.stringify(data));
    } catch (error) {
      alert(error);
    }
  };

  // Cuando creo un request de notificacion guardo el date en el que se creo
  // Cuando se abre la app, si la diferencia de tiempo es menor al que se dispara ==>
  // reseteo todo , sino, creo una nueva noti.

  useEffect(() => {
    const listenNotification = async (seconds = 600) => {
      const lastOpen = await getNotificationData();
      if (!lastOpen) {
        const nowOpen = new Date().getTime();
        await saveNotificationData(nowOpen);
        return;
      }
      const thisDate = new Date().getTime();
      const deltaTime = thisDate - lastOpen;
      if (deltaTime < seconds * 1000) {
        console.log(deltaTime / 1000, seconds);
        await saveNotificationData(thisDate);
        return;
      }
      await saveNotificationData(thisDate);
      schedulePushNotification(seconds);
    };
    listenNotification(600);
  }, []);
};

export default useNotificationWhenOpenApp;
