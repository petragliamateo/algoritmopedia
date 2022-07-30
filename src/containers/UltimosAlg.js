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

function UltimosAlg(algoritmos) {
  if (!algoritmos) return null;
  return (
    <View style={styles.container}>
      <Title><Text>💡 Últimos Algoritmos</Text></Title>
      <ScrollView style={styles.horizontalScroller}>
        {algoritmos.algoritmos.map((alg) => (
          <View key={alg.post_date} style={styles.item}>
            <Linked><Text>{alg.post_title}</Text></Linked>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default UltimosAlg;
