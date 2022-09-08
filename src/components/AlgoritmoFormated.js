/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Linked, RegularText, Title } from '../customComponents/TextComponents';
import AutoImage from '../customComponents/AutoImage';
import format from '../helpers/formatHtml';
import fileManager from '../utils/storage/fileManager';
import LatextToImg from '../customComponents/LatextToImg';

function typeComponent(content, type, fullType) {
  let style;
  // console.log('FT', fullType);
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
      style = { color: '#35C82F', backgroundColor: 'black', padding: 0 };
      return (
        <ScrollView horizontal key={content}>
          <RegularText key={content} style={style} bold={bold}>{content}</RegularText>
        </ScrollView>
      );
    case 'strong':
      style = { color: 'black' };
      bold = true;
      content = `${content}`;
      break;
    case 'a':
      // Tiene la prop de la forma src="https//..."
      i1 = fullType.indexOf('href=');
      i2 = fullType.indexOf(' ', i1);
      if (i1 === -1) break;
      const href = fullType.slice(i1 + 6, i2 - 1);
      // Pasar href como prop, modificar RegularTest para que tenga Deep Linking
      style = { textDecorationLine: 'underline', fontSize: 18 };
      return (
        <Linked key={href} style={style} bold to={href}>{content}</Linked>
      );
    case 'img':
      // Tiene la prop de la forma src="https//..."
      // Y la prop alt="...":
      i1 = fullType.indexOf('alt=');
      i2 = fullType.indexOf('"', i1 + 5);
      const alt = i1 === -1 ? null : fullType.slice(i1 + 5, i2);
      style = { fontSize: 14 };
      i1 = fullType.indexOf('src=');
      i2 = fullType.indexOf('"', i1 + 5);
      if (i1 === -1) break;
      const src = fullType.slice(i1 + 5, i2);

      const termination = src.slice(src.lastIndexOf('.') + 1);
      const supportedTerminations = ['png', 'jpg', 'gif', 'svg'];
      if (!supportedTerminations.includes(termination)) {
        return (
          <View key={src}>
            <LatextToImg latex={`$${alt}$`} />
          </View>
        );
      }

      // Las imagenes se descargan, getPath devuelve el path al archivo segun su src:
      const path = fileManager.getPath(src);
      return (
        <View key={src}>
          <AutoImage uri={path} deltaWidth={30} />
        </View>
      );
    case 'hr':
      style = { borderTopWidth: 1, borderColor: '#777' };
      break;
    case 'li':
      style = { paddingLeft: 5, marginLeft: 5, marginBottom: 5 };
      break;
    case 'h1':
      return <Title key={content} style={{ marginVertical: 10 }}>{content}</Title>;
    case 'h2':
      return <Title key={content} style={{ fontSize: 26, marginVertical: 10 }}>{content}</Title>;
    case 'h3':
      return <Title key={content} style={{ fontSize: 22, marginVertical: 10 }}>{content}</Title>;
    default:
      break;
  }
  return <RegularText key={content} style={style} bold={bold}>{content}</RegularText>;
}

// La data del algoritmo: json string con el documento html.

function AlgoritmoFormated({ algoritmo }) {
  // Que los objetos retornen dentro de un Text hace que sigan la linea.
  // console.log(format(algoritmo));
  return (
    <View>
      {mapper(format(algoritmo).children)}
    </View>
  );
}

export default AlgoritmoFormated;

function ViewOrText({ children, type = '', obj }) {
  const viewTypes = ['figure', 'pre', 'hr', 'blockquote', 'code', 'img'];
  if (viewTypes.includes(type) || searchImg(obj)) {
    return <View>{children}</View>;
  }
  return <Text>{children}</Text>;
}

function searchImg(obj = {}) {
  // retorno true si el objeto llega a tener un children img
  // false en caso contrario
  // Esta funcion es de orden 1, si un children de children tiene una img no cuenta.
  let returned = false;
  if (obj.children) {
    obj.children.forEach((ch) => {
      if (ch.type === 'img') returned = true;
    });
  }
  return returned;
}

function mapper(childArray = [], parentType = '', fullType = '') {
  // Old destructuring
  const childMap = [];
  if (childArray) {
    childArray.forEach((ch, i) => {
      if (ch.content || ch.content === '') {
        // Si existe content:
        childMap.push(typeComponent(ch.content, parentType, fullType));
      }
      if (ch.children) {
        // Si existe children --> tiene childrens:
        childMap.push(
          <ViewOrText type={ch.type} obj={ch} key={i}>
            {mapper(ch.children, ch.type, ch.fullType)}
          </ViewOrText>,
        );
      }
    });
  }

  return childMap;
}
