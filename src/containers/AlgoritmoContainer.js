import React from 'react';
import {
  View, Button, Image, StyleSheet, Text,
} from 'react-native';
import Algoritmo from '../components/Algoritmo';

import alg1 from '../data/algoritmos/alg1';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

// La data del algoritmo: json string con el documento html.

function AlgoritmoContainer({ categoria }) {
  const [algoritmos, setAlgoritmos] = React.useState([alg1]);
  // Pasar a switch o funcion externa
  if (categoria === 'Condicionales') {
    // setAlgoritmos([alg1]);
  }
  return (
    <View style={styles.container}>
      {algoritmos.map((alg) => <Algoritmo algoritmo={alg} />)}
      <Text>Footer en comun</Text>
    </View>
  );
}

export default AlgoritmoContainer;
