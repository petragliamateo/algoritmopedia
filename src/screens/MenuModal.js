/* eslint-disable react-native/no-raw-text */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable, ScrollView, StyleSheet,
} from 'react-native';
import { Linked, RegularText } from '../customComponents/TextComponents';
import AlgoritmosContext from '../contexts/AlgoritmosContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  items: {
    borderBottomWidth: 0.5,
    padding: 15,
  },
});

function MenuModal({ setShowMenu }) {
  const { pages } = React.useContext(AlgoritmosContext);
  const navigation = useNavigation();
  const navigateAndClose = (uri = '', algoritmo = null) => {
    setShowMenu((p) => !p);
    if (uri) {
      navigation.navigate(uri);
      return;
    }
    navigation.navigate('algoritmo', { algoritmo });
  };
  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.items} onPress={() => setShowMenu((p) => !p)}>
        <RegularText bold>X</RegularText>
      </Pressable>

      <Pressable
        style={styles.items}
        onPress={() => navigateAndClose('home')}
      >
        <Linked>Inicio</Linked>
      </Pressable>

      {pages.map((page) => (
        <Pressable
          style={styles.items}
          key={page.post_date}
          onPress={() => navigateAndClose(null, page)}
        >
          <Linked>{page.post_title}</Linked>
        </Pressable>
      ))}

      <Pressable
        style={styles.items}
        onPress={() => navigateAndClose('Configuración')}
      >
        <Linked>Configuración</Linked>
      </Pressable>
    </ScrollView>
  );
}

export default MenuModal;
