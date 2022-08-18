import React from 'react';
import { ScrollView, Text } from 'react-native';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import Buttoncito from '../customComponents/Buttoncito';
import useNotificationListener from '../utils/notifications/useNotificationListener';
import sendPushNotification from '../utils/notifications/sendNotificationDemo';
import sheudleNotification from '../utils/notifications/sheudleNotification';

function Configuration() {
  const token = useNotificationListener();
  const { reloadData, removeData } = React.useContext(AlgoritmosContext);
  return (
    <ScrollView>
      <Buttoncito onPress={reloadData} title="ACTUALIZAR ALGORITMOS" />
      <Buttoncito onPress={removeData} title="LIMPIAR CACHE" color="red" />
      <Buttoncito onPress={async () => { await sheudleNotification(0); }} title="instant notification demo" color="yellow" />
      <Buttoncito onPress={() => sendPushNotification(token)} title="push notification demo" color="green" />
      <Text>
        Token:
        {' '}
        {token}
      </Text>
    </ScrollView>
  );
}

export default Configuration;
