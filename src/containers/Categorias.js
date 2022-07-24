/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, ScrollView, useWindowDimensions, Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Title, SubTitle, RegularText } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  horizontalScroller: {
    maxHeight: '70%',
  },
});

const data = ['Condicionales', 'Entrada de datos', 'Inteligencia artificial', 'Iteración', 'Ordenamiento',
  'POO', 'Recursividad'];
const lorem = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut totam, sit veritatis molestiae rerum nulla
  iure nemo quasi maiores, corporis nam in tenetur quia consequuntur, quibusdam exercitationem reiciendis.
  Consectetur, ipsam!`;

function Categorias() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  // Largo de la targeta = windowWidth - marginX * 2 - paddingCont * 2.
  const cardWidth = width - 60;
  const cardStyle = {
    width: cardWidth,
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 25,
    alignSelf: 'flex-start',
  };
  return (
    <View style={styles.container}>
      <Title><Text style={{ color: '#ffffff' }}>📝 Categorías</Text></Title>
      <ScrollView horizontal style={styles.horizontalScroller}>
        {data.map((title) => (
          <Pressable
            key={title}
            style={cardStyle}
            onPress={() => navigation.navigate('categorias', { title })}
          >
            <SubTitle><Text style={{ color: '#ffffff' }}>{title}</Text></SubTitle>
            <RegularText style={{ color: '#ffffff' }}><Text>{lorem}</Text></RegularText>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
