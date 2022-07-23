/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import React from 'react';

import { RegularText, Linked } from '../customComponents/TextComponents';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 35,
    marginVertical: 15,
  },
  views: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#BBBBBB',
    fontSize: 16,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    width: 33,
    height: 33,
    marginHorizontal: 5,
  },
  img: {
    width: 18,
    height: 18,
  },
});

function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.views}>
        <Linked style={styles.text} bold>
          <Text>Envía tu sugerencia sobre Algoritmopedia</Text>
        </Linked>
      </View>

      <View style={styles.views}>
        <RegularText style={styles.text} bold>
          <Text>Redes Sociales:</Text>
        </RegularText>
        <View style={styles.socials}>
          <View style={{ ...styles.iconContainer, backgroundColor: '#cd2653' }}>
            <Image style={styles.img} source={instagram} />
          </View>
          <View style={{ ...styles.iconContainer, backgroundColor: '#0672ee' }}>
            <Image style={styles.img} source={linkedin} />
          </View>
        </View>
      </View>

      <View style={styles.views}>
        <RegularText style={styles.text} bold>
          <Text>Contacto:</Text>
        </RegularText>
        <RegularText style={styles.text} italic>
          <Text>soporte@algoritmopedia.org</Text>
        </RegularText>
      </View>

      <View style={{ marginTop: 15 }}>
        <RegularText>
          <Text>© 2022 Algoritmopedia</Text>
        </RegularText>
      </View>
    </View>
  );
}

export default Footer;
