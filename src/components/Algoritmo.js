/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet,
} from 'react-native';
import * as Linking from 'expo-linking';

import AlgoritmoFormated from './AlgoritmoFormated';
import matecodigo from '../../assets/images/matecodigo.png';
import contenidoRelacionado from '../helpers/contenidoRelacionado';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  footer: {
    display: 'flex',
    height: 175,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  img: {
    width: 75,
    height: 75,
  },
});

// La data del algoritmo: json string con el documento html.

function Algoritmo({ algoritmo, guid }) {
  return (
    <View style={styles.container}>
      <AlgoritmoFormated algoritmo={algoritmo} />
      {guid ? (
        <View style={{ ...styles.footer, height: 130 }}>
          <Image style={styles.img} source={matecodigo} />
          <Button
            title="Mas informacion"
            color="#0672ee"
            onPress={() => Linking.openURL(guid)}
          />
        </View>
      ) : (
        <View style={styles.footer}>
          <Image style={styles.img} source={matecodigo} />
          <Button
            title="contenido relacionado"
            color="#0672ee"
            onPress={() => Linking.openURL(contenidoRelacionado(algoritmo))}
          />
          <Button
            title="corregir este aporte"
            color="#f08484"
            onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfd323My1ZYLTv_-bEYdzGpSsPR5NGWIPiYzIkz7UhLq-sDWQ/viewform')}
          />
        </View>
      )}
    </View>
  );
}

export default Algoritmo;
