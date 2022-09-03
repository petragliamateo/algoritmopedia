/* eslint-disable react-native/no-inline-styles */
import {
  Modal,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

import {
  MainScreen, Categorias, UltimosAlg, AportarAlg,
} from '../containers';
import { FullScreen } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import SlidersInitial from '../components/SlidersInitial';

function Home() {
  const { algoritmos, reloadData } = React.useContext(AlgoritmosContext);
  const [showSliders, setShowSliders] = useState(true);
  // Ordenar algoritmos por fecha
  const lastest = algoritmos.slice(algoritmos.length - 3, algoritmos.length);
  const color = '#2F7EC8';
  return (
    <ScrollView>

      <Modal
        visible={showSliders}
        onRequestClose={() => setShowSliders((prev) => !prev)}
        animationType="slide"
        transparent
      >
        <SlidersInitial setShowSliders={setShowSliders} />
      </Modal>

      <FullScreen deltaHeight={15}>
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
