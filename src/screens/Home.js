/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  MainScreen, Categorias, UltimosAlg, AportarAlg,
} from '../containers';
import { Footer, FullScreen, Header } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

function Home() {
  const { algoritmos } = React.useContext(AlgoritmosContext);
  // Ordenar algoritmos por fecha
  const lastest = algoritmos.slice(algoritmos.length - 3, algoritmos.length);
  const color = '#2F7EC8';
  return (
    <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
      <Header />
      <FullScreen deltaHeight={60}>
        <MainScreen />
      </FullScreen>

      <FullScreen bg={color}>
        <Categorias />
      </FullScreen>

      <FullScreen>
        <UltimosAlg algoritmos={lastest} />
      </FullScreen>

      <FullScreen bg={color}>
        <AportarAlg />
      </FullScreen>

      <Footer />
    </ScrollView>
  );
}

export default Home;
