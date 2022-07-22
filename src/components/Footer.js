/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, Button, Image,
} from 'react-native';
import React from 'react';

import { RegularText } from '../customComponents/TextComponents';
import mateCheck from '../../assets/images/mateformulario.png';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#aaaaaa',
  },
  views: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '100%',
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
  miniText: {
    textAlign: 'center',
    fontSize: 12,
  },
  img: {
    width: 35,
    height: 35,
  },
});

function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.views}>
        <Button title="Envía tu sugerencia sobre Algoritmopedia" />
      </View>

      <View style={styles.views}>
        <RegularText style={styles.text} bold>
          <Text>Redes Sociales</Text>
        </RegularText>
        <Image style={styles.img} source={{ uri: mateCheck }} />
        <Image style={styles.img} source={{ uri: mateCheck }} />
      </View>

      <View style={styles.views}>
        <RegularText style={styles.text} bold>
          <Text>Contacto</Text>
        </RegularText>
        <RegularText style={styles.miniText} italic>
          <Text>soporte@algoritmopedia.org</Text>
        </RegularText>
      </View>

      <View>
        <RegularText>
          <Text>© 2022 Algoritmopedia</Text>
        </RegularText>
      </View>
    </View>
  );
}

export default Footer;
