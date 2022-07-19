/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, ScrollView,
} from 'react-native';
import React from 'react';

import { Title, SubTitle, RegularText } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  horizontalScroller: {
    maxHeight: 400,
  },
  block: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    width: 330,
    margin: 10,
  },
});

const data = ['Condicionales', 'Entrada de datos', 'Inteligencia artificial', 'Iteración', 'Ordenamiento',
  'POO', 'Recursividad'];
const lorem = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut totam, sit veritatis molestiae rerum nulla
  iure nemo quasi maiores, corporis nam in tenetur quia consequuntur, quibusdam exercitationem reiciendis.
  Consectetur, ipsam!`;

function Categorias() {
  return (
    <View style={styles.container}>
      <Title><Text style={{ color: '#ffffff' }}>📝 Categorías</Text></Title>
      <ScrollView horizontal style={styles.horizontalScroller}>
        {data.map((title) => (
          <View key={title} style={styles.block}>
            <SubTitle><Text>{title}</Text></SubTitle>
            <RegularText><Text>{lorem}</Text></RegularText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
