/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView, View, Pressable, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Linked } from '../customComponents/TextComponents';
import { Search } from '../components';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

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
  search: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
});

function AllAlgoritmos({ props = { term: '', saved: null } }) {
  const { saved } = props;
  const [searchTerm, setSearchTerm] = useState(props ? props.term : '');
  const [filtered, setFiltered] = useState([]);
  const navigation = useNavigation();
  const { algoritmos } = useContext(AlgoritmosContext);
  // Algoritmo de busqueda:
  useEffect(() => {
    setFiltered(algoritmos.filter((alg) => (
      alg.post_title.toLowerCase()
        .includes(searchTerm.toLowerCase())
    )));
    if (saved) {
      setFiltered((prev) => prev.filter((a) => saved.includes(a.name)));
    }
  }, [searchTerm]);
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={styles.search}>
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </View>

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
