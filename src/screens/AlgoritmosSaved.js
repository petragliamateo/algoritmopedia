/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { useContext } from 'react';
import {
  ScrollView, View, Pressable, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Linked, Title } from '../customComponents/TextComponents';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import useSavedAlgoritmos from '../utils/storage/useSavedAlgoritmos';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 15,
    minHeight: 400,
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column-reverse',
  },
  item: {
    padding: 20,
    borderWidth: 1,
    margin: 10,
  },
});

function AllAlgoritmos() {
  const navigation = useNavigation();
  const { algoritmos } = useContext(AlgoritmosContext);
  const { favorites } = useSavedAlgoritmos();
  if (!favorites || favorites.length === 0) {
    return (
      <Title>No se encontraron algoritmos guardados, presiona en el marcador para añadirlos</Title>
    );
  }
  const filtered = algoritmos.filter((alg) => favorites.includes(alg.post_name));
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {filtered.map((alg) => (
            <Pressable
              key={alg.post_date}
              style={styles.item}
              onPress={() => navigation.navigate('algoritmo', { algoritmo: alg })}
            >
              <Linked>{alg.post_title}</Linked>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default AllAlgoritmos;
