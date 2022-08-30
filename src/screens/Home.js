/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  MainScreen, Categorias, UltimosAlg, AportarAlg,
} from '../containers';
import { FullScreen } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

function Home() {
  const { algoritmos, reloadData } = React.useContext(AlgoritmosContext);
  // Ordenar algoritmos por fecha
  const lastest = algoritmos.slice(algoritmos.length - 3, algoritmos.length);
  const color = '#2F7EC8';
  return (
    <ScrollView>
      <FullScreen>
        <MainScreen reloadData={reloadData} />
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
    </ScrollView>
  );
}

export default Home;
