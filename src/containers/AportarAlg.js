/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, Button, Image,
} from 'react-native';
import React from 'react';
import * as Linking from 'expo-linking';

import { RegularText, Title } from '../customComponents/TextComponents';
import mateCheck from '../../assets/images/mateformulario.png';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    margin: 15,
  },
  img: {
    width: 100,
    height: 100,
  },
});

function AportarAlg() {
  return (
    <View style={styles.container}>
      <Title>
        <Text style={styles.text}>🧉 Aportar Algoritmos</Text>
      </Title>
      <View style={styles.align}>
        <RegularText style={styles.text}>
          <Text>
            Publica tus algoritmos para mejorar tu perfil profesional con ayuda de Algoritmopedia
          </Text>
        </RegularText>
        <RegularText style={styles.text} italic>
          <Text>
            Puedes aportar algoritmos en cualquier lenguaje de programación
          </Text>
        </RegularText>
        <Button title="APORTAR" onPress={() => Linking.openURL('https://algoritmopedia.org/index.php/aportar/')} />
      </View>
      <Image style={styles.img} source={mateCheck} />
    </View>
  );
}

export default AportarAlg;
