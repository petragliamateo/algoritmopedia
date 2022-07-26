/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet, Text,
} from 'react-native';

import { SubTitle } from '../customComponents/TextComponents';
import format from '../helpers/formatHtml';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

function destructuring(obj = { content: '' }) {
  if (obj.content || obj.content === '') {
    return [obj.content];
  }
  const allValues = [];
  obj.children.forEach((elm) => {
    allValues.push(destructuring(elm));
  });
  return allValues;
}

// La data del algoritmo: json string con el documento html.

function AlgoritmoFormated({ algoritmo }) {
  return (
    <View style={styles.container}>
      {format(algoritmo).children.map((inc) => (
        <View>
          <Text>{destructuring(inc)}</Text>
        </View>
      ))}
    </View>
  );
}

export default AlgoritmoFormated;
