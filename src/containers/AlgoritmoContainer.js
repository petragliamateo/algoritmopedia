import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import Algoritmo from '../components/Algoritmo';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import { Title } from '../customComponents/TextComponents';
import categorySwitch from '../helpers/categorySwitch';

const styles = StyleSheet.create({
  container: {
  },
  algItem: {
    paddingVertical: 25,
    borderTopWidth: 1,
  },
});

// La data del algoritmo: json string con el documento html.

function AlgoritmoContainer({ categoria }) {
  const { algoritmos } = React.useContext(AlgoritmosContext);
  const [algoritmosSelected, setAlgoritmosSelected] = React.useState([]);
  // Pasar a switch o funcion externa
  React.useEffect(() => {
    categorySwitch(categoria, algoritmos, setAlgoritmosSelected);
  }, []);

  return (
    <View style={styles.container}>
      {algoritmosSelected.map((alg) => (
        <View style={styles.algItem}>
          <Title>{alg.post_title}</Title>
          <Algoritmo algoritmo={alg.post_content} />
        </View>
      ))}
    </View>
  );
}

export default AlgoritmoContainer;
