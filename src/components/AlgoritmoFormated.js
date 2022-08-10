/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, StyleSheet, Text,
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
      style = { color: 'green', backgroundColor: 'black', padding: 0 };
      return <View><RegularText style={style} bold={bold}>{content}</RegularText></View>;
    case 'strong':
      style = { color: 'black' };
      bold = true;
      content = ` ${content} `;
      break;
    case 'a':
      style = { color: 'blue', textDecorationLine: 'underline' };
      bold = true;
      break;
    default:
      break;
  }
  return <RegularText style={style} bold={bold}>{content}</RegularText>;
}

// La data del algoritmo: json string con el documento html.

function AlgoritmoFormated({ algoritmo }) {
  // Que los objetos retornen dentro de un Text hace que sigan la linea.
  return (
    <View style={styles.container}>
      {format(algoritmo).children.map((inc, i) => (
        <Text key={i}>
          {destructuring(inc)}
        </Text>
      ))}
    </View>
  );
}

export default AlgoritmoFormated;
