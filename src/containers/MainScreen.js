/* eslint-disable react-native/no-inline-styles */
import {
  Image, Text, View, StyleSheet,
} from 'react-native';
import React from 'react';

import { Title } from '../customComponents/TextComponents';
import matecodigo from '../../assets/images/matecodigo.png';

import Search from '../components/Search';
import Buttoncito from '../customComponents/Buttoncito';
import useNotificationListener from '../utils/useNotificationListener';
import sendPushNotification from '../utils/sendNotificationDemo';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 35,
    justifyContent: 'space-around',
    height: '100%',
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
});

function Main({ getData, removeData }) {
  const token = useNotificationListener();
  return (
    <View style={styles.container}>
      <Title>
        <Text>Entrena tu pensamiento lógico</Text>
      </Title>
      <Image style={styles.image} source={matecodigo} />

      <View style={{ marginHorizontal: 25 }}>
        <Search />
      </View>

      <Buttoncito onPress={getData} title="ACTUALIZAR ALGORITMOS" />
      <Buttoncito onPress={removeData} title="LIMPIAR CACHE" color="red" />
      <Buttoncito onPress={() => sendPushNotification(token)} title="notification demo" color="green" />
      <Text>
        Token:
        {' '}
        {token}
      </Text>

    </View>
  );
}

export default Main;
