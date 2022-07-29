/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import { RegularText } from '../customComponents/TextComponents';
import format from '../helpers/formatHtml';

const styles = StyleSheet.create({
  container: {
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
  let bold = false;
  if (content === '\n' || content === '\n\n\n\n') { return null; }
  switch (type) {
    case '':
      style = { color: 'red' };
      break;
    case 'p':
      style = { color: 'black' };
      break;
    case 'code':
      style = { color: 'green', backgroundColor: 'black', padding: 16 };
      break;
    case 'strong':
      style = { color: 'black' };
      bold = true;
      break;
    default:
      break;
  }
  return <RegularText style={style} bold={bold}>{content}</RegularText>;
}

// La data del algoritmo: json string con el documento html.

function AlgoritmoFormated({ algoritmo }) {
  return (
    <View style={styles.container}>
      {format(algoritmo).children.map((inc, i) => (
        <View key={i}>
          {destructuring(inc)}
        </View>
      ))}
    </View>
  );
}

export default AlgoritmoFormated;
