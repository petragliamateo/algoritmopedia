import {
  Text, View, StyleSheet, ScrollView,
} from 'react-native';
import React from 'react';

import { Title, Linked } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  item: {
    padding: 20,
    borderWidth: 1,
    width: 330,
    margin: 10,
  },
});

const data = [
  '¿Cómo hacer el bubble sort con Python?',
  '¿Cómo calcular un promedio con Python?',
  '¿Cómo calcular la media geométrica con Python?',
  '¿Cómo hacer el bubble sort con Python1?',
  '¿Cómo calcular un promedio con Python1?',
  '¿Cómo calcular la media geométrica con Python1?',
  '¿Cómo hacer el bubble sort con Python2?',
  '¿Cómo calcular un promedio con Python2?',
  '¿Cómo calcular la media geométrica con Python2?',
];

function UltimosAlg() {
  return (
    <View style={styles.container}>
      <Title><Text>💡 Últimos Algoritmos</Text></Title>
      <ScrollView style={styles.horizontalScroller}>
        {data.map((title) => (
          <View key={title} style={styles.item}>
            <Linked><Text>{title}</Text></Linked>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default UltimosAlg;
