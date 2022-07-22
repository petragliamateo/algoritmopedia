/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, ScrollView, useWindowDimensions,
} from 'react-native';
import React from 'react';

import { Title, SubTitle, RegularText } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  horizontalScroller: {
    maxHeight: 400,
  },
});

const data = ['Condicionales', 'Entrada de datos', 'Inteligencia artificial', 'Iteración', 'Ordenamiento',
  'POO', 'Recursividad'];
const lorem = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut totam, sit veritatis molestiae rerum nulla
  iure nemo quasi maiores, corporis nam in tenetur quia consequuntur, quibusdam exercitationem reiciendis.
  Consectetur, ipsam!`;

function Categorias() {
  const { width } = useWindowDimensions();
  // Largo de la targeta = windowWidth - marginX * 2.
  const cardWidth = width - 20;
  const cardStyle = {
    width: cardWidth,
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  };
  return (
    <View style={styles.container}>
      <Title><Text style={{ color: '#ffffff' }}>📝 Categorías</Text></Title>
      <ScrollView horizontal style={styles.horizontalScroller}>
        {data.map((title) => (
          <View
            key={title}
            style={cardStyle}
          >
            <SubTitle><Text style={{ color: '#ffffff' }}>{title}</Text></SubTitle>
            <RegularText><Text style={{ color: '#ffffff' }}>{lorem}</Text></RegularText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
