/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { useContext, useState } from 'react';
import {
  ScrollView, View, Pressable, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Linked } from '../customComponents/TextComponents';
import { Search, Footer, Header } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 15,
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

function AllAlgoritmos({ props }) {
  const [searchTerm, setSearchTerm] = useState(props ? props.term : '');
  const navigation = useNavigation();
  const { algoritmos } = useContext(AlgoritmosContext);
  // Algoritmo de busqueda:
  const filtered = algoritmos.filter((alg) => (
    alg.post_title.toLowerCase()
      .includes(searchTerm.toLowerCase())
  ));
  return (
    <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
      <Header />
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

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

      <Footer />
    </ScrollView>
  );
}

export default AllAlgoritmos;
