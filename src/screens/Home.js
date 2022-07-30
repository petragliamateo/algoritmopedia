/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView, View,
} from 'react-native';
import React from 'react';

import {
  MainScreen, Categorias, UltimosAlg, AportarAlg,
} from '../containers';
import { Footer, FullScreen } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

function Home() {
  const { algoritmos } = React.useContext(AlgoritmosContext);
  const color = '#2F7EC8';
  return (
    <ScrollView>
      <FullScreen>
        <MainScreen />
      </FullScreen>

      <FullScreen bg={color}>
        <Categorias />
      </FullScreen>

      <FullScreen>
        <UltimosAlg algoritmos={algoritmos} />
      </FullScreen>

      <FullScreen bg={color}>
        <AportarAlg />
      </FullScreen>

      <View style={{ backgroundColor: '#333333', borderTopWidth: 2 }}>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default Home;
