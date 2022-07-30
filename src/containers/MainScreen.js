/* eslint-disable react-native/no-inline-styles */
import {
  Image, Text, View, StyleSheet, Button,
} from 'react-native';
import React from 'react';

import { Title } from '../customComponents/TextComponents';
import matecodigo from '../../assets/images/matecodigo.png';

import Search from '../components/Search';
import { getPosts } from '../services/algoritmos';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 35,
    justifyContent: 'space-around',
    height: '100%',
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
});

function Main() {
  const { algoritmos, setAlgoritmos } = React.useContext(AlgoritmosContext);
  console.log(algoritmos.map((alg) => alg.post_title));
  const getData = async () => {
    const data = await getPosts();
    setAlgoritmos(data);
  };

  return (
    <View style={styles.container}>
      <Title>
        <Text>Entrena tu pensamiento lógico</Text>
      </Title>
      <Image style={styles.image} source={matecodigo} />

      <View style={{ marginHorizontal: 25 }}>
        <Search />
      </View>

      <Button title="actualizar" onPress={getData} />

    </View>
  );
}

export default Main;
