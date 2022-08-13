/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text,
} from 'react-native';

import { RegularText } from '../customComponents/TextComponents';
import format from '../helpers/formatHtml';

function destructuring(obj = { content: '' }, type = '', fullType = '') {
  if (obj.content || obj.content === '') {
    return typeComponent(obj.content, type, fullType);
  }
  const allValues = [];
  obj.children.forEach((elm) => {
    allValues.push(destructuring(elm, obj.type, obj.fullType));
  });
  return allValues;
}

function typeComponent(content, type, fullType) {
  let style;
  console.log('FT', fullType);
  let bold = false;
  let i1;
  let i2;
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
      // Tiene la prop de la forma src="https//..."
      i1 = fullType.indexOf('href=');
      i2 = fullType.indexOf(' ', i1);
      if (i1 === -1) break;
      const href = fullType.slice(i1 + 6, i2 - 1);
      console.log(href);
      // Pasar href como prop, modificar RegularTest para que tenga Deep Linking
      style = { color: 'blue', textDecorationLine: 'underline' };
      return (
        <RegularText style={style} bold>{content}</RegularText>
      );
    case 'img':
      // Tiene la prop de la forma src="https//..."
      i1 = fullType.indexOf('src=');
      i2 = fullType.indexOf(' ', i1);
      if (i1 === -1) break;
      const src = fullType.slice(i1 + 5, i2 - 1);
      console.log(src);
      // return <Image source={src} />;
      break;
    case 'hr':
      // Linea
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
    <View>
      {format(algoritmo).children.map((inc, i) => (
        <Text key={i}>
          {destructuring(inc)}
        </Text>
      ))}
    </View>
  );
}

export default AlgoritmoFormated;
