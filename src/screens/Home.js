/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
} from 'react-native';
import React from 'react';

import { MainScreen, Categorias, UltimosAlg } from '../containers';
import { FullScreen } from '../components';

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
    </ScrollView>
  );
}

export default Home;
