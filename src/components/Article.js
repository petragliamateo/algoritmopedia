/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Button, Image, StyleSheet,
} from 'react-native';

import { SubTitle } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 26,
    marginTop: 15,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },
  btn: {
    marginVertical: 5,
    marginHorizontal: 25,
  },
});

function Article({ data }) {
  const { title, imgUrl, buttons } = data;
  return (
    <View style={styles.container}>
      {title && <SubTitle style={styles.subtitle}>{title}</SubTitle>}
      {imgUrl && <Image style={styles.img} source={{ uri: imgUrl }} />}
      {buttons.map((b) => (
        <View style={styles.btn} key={b.buttonTitle}>
          <Button
            title={b.buttonTitle}
          />
        </View>
      ))}
    </View>
  );
}

export default Article;
