import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable, ScrollView, StyleSheet, Text,
} from 'react-native';
import { Linked } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  items: {
    borderBottomWidth: 0.5,
    padding: 15,
  },
});

const data = [
  { title: 'Inicio', goto: 'home', id: 1 },
  { title: '🏆 Copa Algoritmopedia', goto: 'copa', id: 2 },
  { title: '📚 Biblioteca', goto: 'biblioteca', id: 3 },
];

function MenuModal({ setShowMenu }) {
  const navigation = useNavigation();
  const navigateAndClose = (uri = '') => {
    setShowMenu((p) => !p);
    if (uri) {
      navigation.navigate(uri);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.items} onPress={() => navigateAndClose()}>
        <Linked><Text>X</Text></Linked>
      </Pressable>

      {data.map((item) => (
        <Pressable
          style={styles.items}
          key={item.id}
          onPress={() => navigateAndClose(item.goto)}
        >
          <Linked>{item.title}</Linked>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default MenuModal;
