/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView } from 'react-native';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import Buttoncito from '../customComponents/Buttoncito';
import fileManager from '../utils/storage/fileManager';
import { MiniText } from '../customComponents/TextComponents';
import { Footer } from '../components';

function Configuration() {
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
      <MiniText>Estado: Beta</MiniText>
      <MiniText>Algoritmopedia 2022</MiniText>
      <Footer />
    </ScrollView>
  );
}

export default Configuration;
