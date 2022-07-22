/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, Button, Image,
} from 'react-native';
import React from 'react';

import { RegularText, Title } from '../customComponents/TextComponents';
import mateCheck from '../../assets/images/mateformulario.png';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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
        <Button title="APORTAR" />
      </View>
      <Image style={styles.img} source={{ uri: mateCheck }} />
    </View>
  );
}

export default AportarAlg;
