/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView } from 'react-native';

import { Title } from '../customComponents/TextComponents';
import { Footer, Header } from '../components';
import Algoritmo from '../components/Algoritmo';

function AlgoritmoScreen({ props }) {
  const { algoritmo } = props;
  // Para que funcione pasar post_content en Algoritmo se debe mejorar el formateo
  // De tal manerea que se supriman los comentarios.
  return (
    <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
      <Header />
      <Title>{algoritmo.post_title}</Title>

      <Algoritmo algoritmo={algoritmo.post_content} guid={algoritmo.guid} />

      <Footer />
    </ScrollView>
  );
}

export default AlgoritmoScreen;
