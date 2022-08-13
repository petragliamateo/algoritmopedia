/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
import {
  View, StyleSheet,
} from 'react-native';
import React, { useContext } from 'react';

import { Title } from '../customComponents/TextComponents';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import CarouselCards from '../components/CarouselCards';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

function Categorias() {
  const { categorias } = useContext(AlgoritmosContext);
  return (
    <View style={styles.container}>
      <Title style={{ color: '#ffffff' }}>📝 Categorías</Title>
      <CarouselCards categorias={categorias} />
    </View>
  );
}

export default Categorias;
