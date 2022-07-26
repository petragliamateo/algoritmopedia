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

function destructuring(obj = { content: '' }, type = '') {
  if (obj.content || obj.content === '') {
    return typeComponent(obj.content, type);
  }
  const allValues = [];
  obj.children.forEach((elm) => {
    allValues.push(destructuring(elm, obj.type));
  });
  return allValues;
}

function typeComponent(content, type) {
  let style;
  switch (type) {
    case '':
      style = { color: 'red' };
      break;
    case 'p':
      style = { color: 'orange' };
      break;
    case 'code':
      style = { color: 'green' };
      break;
    case 'strong':
      style = { color: 'black', fontSize: 24 };
      break;
    default:
      break;
  }
  return <Text style={style}>{content}</Text>;
}

// La data del algoritmo: json string con el documento html.

function AlgoritmoFormated({ algoritmo }) {
  return (
    <View style={styles.container}>
      {format(algoritmo).children.map((inc) => (
        <View>
          {destructuring(inc)}
        </View>
      ))}
    </View>
  );
}

export default AlgoritmoFormated;
