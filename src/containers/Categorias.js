/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, ScrollView, useWindowDimensions, Pressable,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Title, SubTitle, RegularText } from '../customComponents/TextComponents';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

// Estilo: que las tarjetas se pasen una por una, tipo publicacion de IG con circulitos abajo.

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  horizontalScroller: {
    maxHeight: '50%',
  },
  commonTextCard: {
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 15,
  },
});

function Categorias() {
  const { categorias } = useContext(AlgoritmosContext);

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
        {categorias.map((cat) => (
          <Pressable
            key={cat.name}
            style={cardStyle}
            onPress={() => navigation.navigate('categorias', { category: cat })}
          >
            <SubTitle style={styles.commonTextCard}>{cat.name}</SubTitle>
            <RegularText style={styles.commonTextCard}>{cat.description}</RegularText>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
