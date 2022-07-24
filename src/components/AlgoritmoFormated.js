/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet, Text,
} from 'react-native';

import { SubTitle } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

// La data del algoritmo: json string con el documento html.

function format(html) {
  let htmls = html.toString();
  let part = '';
  const arrayOfDoc = [];
  while (htmls.indexOf('<p>') !== -1) {
    const index1 = htmls.indexOf('<p>');
    const index2 = htmls.indexOf('</p>');
    part = htmls.slice(index1, index2 + 4);
    htmls = htmls.replace(part, '');
    arrayOfDoc.push(destructuring(part));
  }
  return { arrayOfDoc, htmls };
}

function destructuring(section) {
  const index1 = section.indexOf('<');
  const index2 = section.indexOf('>');
  const lastIndex1 = section.lastIndexOf('<');
  const lastIndex2 = section.lastIndexOf('>');
  const type = section.slice(index1, index2 + 1);
  const content = section.slice(index2 + 1, lastIndex1);

  return { type, content };
}

function AlgoritmoFormated({ algoritmo }) {
  return (
    <View style={styles.container}>
      {format(algoritmo).arrayOfDoc.map((inc) => (
        <View key={inc.content}>
          <Text>{inc.type}</Text>
          <Text>{inc.content}</Text>
        </View>
      ))}
      <Text>{format(algoritmo).htmls}</Text>
    </View>
  );
}

export default AlgoritmoFormated;
