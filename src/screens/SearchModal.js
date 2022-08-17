import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Search from '../components/Search';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: 20,
    marginTop: 60,
  },
  back: {
    height: '100%',
    width: '100%',
  },
});
// Tiene margin igual a la altura del header.

function MenuModal({ setShowSearch }) {
  return (
    <Pressable style={styles.back} onPress={() => setShowSearch(false)}>
      <View style={styles.container}>
        <Search autoFocus />
      </View>
    </Pressable>
  );
}

export default MenuModal;
