/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView, View,
} from 'react-native';
import React from 'react';

import {
  MainScreen, Categorias, UltimosAlg, AportarAlg,
} from '../containers';
import { Footer, FullScreen } from '../components';

function Home() {
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
        <UltimosAlg />
      </FullScreen>

      <FullScreen bg={color}>
        <AportarAlg />
      </FullScreen>

      <View>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default Home;
