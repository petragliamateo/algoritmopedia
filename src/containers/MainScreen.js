/* eslint-disable react-native/no-inline-styles */
import {
  Image, Text, View, StyleSheet,
} from 'react-native';
import React from 'react';

import { Title } from '../customComponents/TextComponents';
import matecodigo from '../../assets/images/matecodigo.png';

import Search from '../components/Search';
import Buttoncito from '../customComponents/Buttoncito';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 25,
    justifyContent: 'space-around',
    height: '100%',
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
});

function Main({ reloadData }) {
  return (
    <View style={styles.container}>
      <Title>
        <Text>Entrena tu pensamiento computacional</Text>
      </Title>
      <Image style={styles.image} source={matecodigo} />

      <View style={{ marginHorizontal: 25 }}>
        <Search />
        <View style={{ marginTop: 20, marginHorizontal: '10%' }}>
          <Buttoncito onPress={reloadData} title="CARGAR NUEVOS ALGORITMOS" />
        </View>
      </View>

    </View>
  );
}

export default Main;
