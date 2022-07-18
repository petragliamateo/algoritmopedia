import {
  Image, Text, View, StyleSheet, TextInput, Pressable,
} from 'react-native';
import React from 'react';

import { Title } from '../customComponents/TextComponents';
import matecodigo from '../../assets/images/matecodigo.png';

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
  input: {
    alignSelf: 'center',
    color: '#777777',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#777777',
    width: '80%',
    padding: 10,
    alignSelf: 'center',
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <Title>
        <Text>Entrena tu pensamiento lógico</Text>
      </Title>
      <Image style={styles.image} source={{ uri: matecodigo }} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Buscar algoritmo" />
        <Pressable>
          <Text>Lupa</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Home;
