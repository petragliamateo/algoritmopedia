/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet, Text,
} from 'react-native';

import { SubTitle } from '../customComponents/TextComponents';
import AlgoritmoFormated from './AlgoritmoFormated';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

// La data del algoritmo: json string con el documento html.

function Algoritmo({ algoritmo }) {
  return (
    <View style={styles.container}>
      <AlgoritmoFormated algoritmo={algoritmo} />
      <Text>Footer en comun</Text>
    </View>
  );
}

export default Algoritmo;
