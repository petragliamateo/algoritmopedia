/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import Buttoncito from '../customComponents/Buttoncito';
import useNotificationListener from '../utils/notifications/useNotificationListener';
import fileManager from '../utils/storage/fileManager';
import { MiniText } from '../customComponents/TextComponents';
import { Footer } from '../components';

function Configuration() {
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
        title="BORRAR DATOS"
        color="red"
      />
      <Text>{`Expo Push Token: ${token}`}</Text>
      <MiniText>Estado: Beta</MiniText>
      <MiniText>Algoritmopedia 2022</MiniText>
      <Footer />
    </ScrollView>
  );
}

export default Configuration;
