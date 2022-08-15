import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable, ScrollView, StyleSheet, Text,
} from 'react-native';
import { Linked } from '../customComponents/TextComponents';
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

const data = [
  { title: 'Inicio', goto: 'home', id: 1 },
  { title: '📚 Biblioteca', goto: 'biblioteca', id: 2 },
];

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

      {pages.map((page) => (
        <Pressable
          style={styles.items}
          key={page.date}
          onPress={() => navigateAndClose(null, page)}
        >
          <Linked>{page.post_title}</Linked>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default MenuModal;
