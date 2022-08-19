import {
  Text, View, StyleSheet, Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Title, Linked } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column-reverse',
  },
  item: {
    padding: 20,
    borderWidth: 1,
    margin: 10,
  },
});

function UltimosAlg({ algoritmos }) {
  const navigation = useNavigation();
  if (!algoritmos) return null;
  return (
    <View style={styles.container}>
      <Title><Text>💡 Últimos Algoritmos</Text></Title>
      <View style={styles.itemsContainer}>
        {algoritmos.map((alg) => (
          <Pressable
            key={alg.post_date}
            style={styles.item}
            onPress={() => navigation.navigate('algoritmo', { algoritmo: alg })}
          >
            <Linked>{alg.post_title}</Linked>
          </Pressable>
        ))}
      </View>
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('allAlgoritmos')}
      >
        <Linked><Text>Ir a todos..</Text></Linked>
      </Pressable>
    </View>
  );
}

export default UltimosAlg;
