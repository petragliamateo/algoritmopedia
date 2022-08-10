/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet,
} from 'react-native';

import AlgoritmoFormated from './AlgoritmoFormated';
import matecodigo from '../../assets/images/matecodigo.png';

const styles = StyleSheet.create({
  container: {
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

function Algoritmo({ algoritmo }) {
  return (
    <View style={styles.container}>
      <AlgoritmoFormated algoritmo={algoritmo} />
      <View style={styles.footer}>
        <Image style={styles.img} source={matecodigo} />
        <Button title="contenido relacionado" color="#0672ee" />
        <Button title="corregir este aporte" color="#f08484" />
      </View>
    </View>
  );
}

export default Algoritmo;
