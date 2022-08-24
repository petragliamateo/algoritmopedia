/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, Image, Pressable,
} from 'react-native';
import React from 'react';

import AppLink from 'react-native-app-link';

import { RegularText, Linked } from '../customComponents/TextComponents';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    borderTopWidth: 2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginBottom: 60,
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
  const igConfig = {
    appName: 'instagram', appStoreId: '389801252', playStoreId: 'com.instagram.android', appStoreLocale: 'us',
  };
  const igUrl = 'https://www.instagram.com/algoritmopedia/';
  const liConfig = {
    appName: 'linkedin', appStoreId: '288429040', playStoreId: 'com.linkedin.android', appStoreLocale: 'us',
  };
  const liUrl = 'https://www.linkedin.com/company/algoritmopedia/';
  const openApp = async (url, config) => {
    await AppLink.maybeOpenURL(url, config);
  };
  return (
    <View style={styles.container}>
      <View style={styles.views}>
        <Linked
          style={{ fontSize: 16 }}
          bold
          to="https://docs.google.com/forms/d/e/1FAIpQLSfd323My1ZYLTv_-bEYdzGpSsPR5NGWIPiYzIkz7UhLq-sDWQ/viewform"
        >
          Envía tu sugerencia sobre Algoritmopedia
        </Linked>
      </View>

      <View style={styles.views}>
        <RegularText style={styles.text} bold>
          <Text>Redes Sociales:</Text>
        </RegularText>
        <View style={styles.socials}>
          <Pressable
            style={{ ...styles.iconContainer, backgroundColor: '#cd2653' }}
            onPress={() => openApp(igUrl, igConfig)}
          >
            <Image style={styles.img} source={instagram} />
          </Pressable>
          <Pressable
            style={{ ...styles.iconContainer, backgroundColor: '#0672ee' }}
            onPress={() => openApp(liUrl, liConfig)}
          >
            <Image style={styles.img} source={linkedin} />
          </Pressable>
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
