/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView, Text, StyleSheet,
} from 'react-native';

import { Footer } from '../components';
import { RegularText, Title } from '../customComponents/TextComponents';
import data from '../data/BibliotecaData';
import ArticleContainer from '../containers/ArticleContainer';

const { info, lista } = data;

const styles = StyleSheet.create({
  items: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
});

function Biblioteca() {
  return (
    <ScrollView>
      <Title style={styles.items}><Text>📚 Biblioteca</Text></Title>
      <RegularText style={styles.items}><Text>{info}</Text></RegularText>

      <ArticleContainer lista={lista} />

      <Footer />
    </ScrollView>
  );
}

export default Biblioteca;
