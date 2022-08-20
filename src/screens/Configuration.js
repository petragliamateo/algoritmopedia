import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import Buttoncito from '../customComponents/Buttoncito';
import useNotificationListener from '../utils/notifications/useNotificationListener';
import sendPushNotification from '../utils/notifications/sendNotificationDemo';
import sheudleNotification from '../utils/notifications/sheudleNotification';
import fileManager from '../utils/storage/fileManager';

function Configuration() {
  const [temp, setTemp] = React.useState('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540petragliamateo%252FalgoritmopediaApp/algoritmopedia/header_logo.png');
  const token = useNotificationListener();
  const { reloadData, removeData } = React.useContext(AlgoritmosContext);
  return (
    <ScrollView>
      <Buttoncito onPress={reloadData} title="ACTUALIZAR ALGORITMOS" />
      <Buttoncito
        onPress={async () => {
          await removeData();
          await fileManager.deleteAll();
        }}
        title="LIMPIAR CACHE"
        color="red"
      />
      <Buttoncito onPress={async () => { await sheudleNotification(2); }} title="instant notification demo" color="yellow" />
      <Buttoncito onPress={() => sendPushNotification(token)} title="push notification demo" color="green" />
      <Text>
        Token:
        {' '}
        {token}
      </Text>
      <Buttoncito
        onPress={async () => {
          const uri = await fileManager.downloadFile('https://facebook.github.io/react-native/img/header_logo.png', 'header_logo.png');
          setTemp(uri);
        }}
        title="download img demo"
        color="pink"
      />
      <Image source={{ uri: temp }} style={{ width: 140, height: 140 }} />
      <Text>{temp}</Text>
      <Buttoncito onPress={async () => { await fileManager.deleteFile('header_logo.png'); }} title="delete file demo" color="#ccc" />
    </ScrollView>
  );
}

export default Configuration;
