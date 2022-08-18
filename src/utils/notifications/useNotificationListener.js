/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useRef, useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import notificationGetToken from './notificationGetToken';
import { postExpoToken } from '../../services/algoritmos';
import sendNotificationDemo from './sendNotificationDemo';
import schedulePushNotification from './sheudleNotification';
import useNotificationWhenOpenApp from './useNotificationWhenOpenApp';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function useNotificationListener() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    notificationGetToken().then((token) => {
      console.log('Token:', token);
      setExpoPushToken(token);
      sendNotificationDemo(token);
      if (token) postExpoToken(token).then(alert('token online'));
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener((noti) => {
      setNotification(noti);
    });

    // This listener is fired whenever a user taps on or interacts with a notification
    // (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return expoPushToken;
}
