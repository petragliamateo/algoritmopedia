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
import { getPosts } from '../services/algoritmos';

function Home() {
  const { algoritmos, setAlgoritmos } = React.useContext(AlgoritmosContext);
  // Ordenar algoritmos por fecha
  const lastest = algoritmos.slice(algoritmos.length - 3, algoritmos.length);
  console.log(algoritmos.map((a) => a.post_title));
  const color = '#2F7EC8';
  const getData = async () => {
    const data = await getPosts();
    setAlgoritmos(data);
  };
  return (
    <ScrollView>
      <FullScreen>
        <MainScreen getData={getData} />
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

      <View style={{ backgroundColor: '#333333', borderTopWidth: 2 }}>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default Home;
