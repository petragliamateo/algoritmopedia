/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Title } from '../customComponents/TextComponents';
import { Footer } from '../components';
import Algoritmo from '../components/Algoritmo';

function AlgoritmoScreen({ props }) {
  const { algoritmo } = props;
  return (
    <ScrollView>
      <Algoritmo algoritmo={algoritmo} />

      <Title>Comentarios..</Title>

      <View style={{ backgroundColor: '#333333', borderTopWidth: 2 }}>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default AlgoritmoScreen;
