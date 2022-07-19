/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, View, Modal,
} from 'react-native';
import algoritmopedia from '../../assets/images/algoritmopediaclaro.png';
import searchIcon from '../../assets/icons/search2.svg';
import dotsIcon from '../../assets/icons/three-dots.svg';
import { MenuModal } from '../screens';
import { MiniText } from '../customComponents/TextComponents';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    shadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
  },
  pressButton: {
    width: 50,
    height: 38,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressButton}>
        <Image style={{ width: 23, height: 23 }} source={{ uri: searchIcon }} />
        <MiniText><Text>Buscar</Text></MiniText>
      </Pressable>
      <Image style={styles.image} source={{ uri: algoritmopedia }} />
      <Pressable style={styles.pressButton} onPress={() => setShowMenu((prev) => !prev)}>
        <Image style={{ width: 26, height: 23 }} source={{ uri: dotsIcon }} />
        <MiniText><Text>Menú</Text></MiniText>
      </Pressable>

      <Modal
        visible={showMenu}
        onRequestClose={() => setShowMenu((prev) => !prev)}
      >
        <MenuModal setShowMenu={setShowMenu} />
      </Modal>
    </View>
  );
}

export default Navbar;
