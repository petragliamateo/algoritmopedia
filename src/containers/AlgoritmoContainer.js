import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import Algoritmo from '../components/Algoritmo';
import SaveButton from '../components/SaveButton';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import { Title } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
  },
  algItem: {
    paddingVertical: 25,
    borderTopWidth: 1,
  },
});

// La data del algoritmo: json string con el documento html.

function AlgoritmoContainer({ algoritmoNames }) {
  const { algoritmos } = React.useContext(AlgoritmosContext);

  return (
    <View style={styles.container}>
      {algoritmos
        .filter((a) => algoritmoNames.includes(a.post_name))
        .map((alg) => (
          <View style={styles.algItem} key={alg.post_date}>
            <Title>{alg.post_title}</Title>
            <SaveButton name={alg.post_name} />
            <Algoritmo algoritmo={alg.post_content} />
          </View>
        ))}
    </View>
  );
}

export default AlgoritmoContainer;
