/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, View, Modal, StatusBar,
} from 'react-native';
import algoritmopedia from '../../assets/images/algoritmopediaclaro.png';
import searchIcon from '../../assets/icons/searchBlack.png';
import dotsIcon from '../../assets/icons/three-dots.png';
import { MenuModal, SearchModal } from '../screens';
import { MiniText } from '../customComponents/TextComponents';

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  // Solucion temporal, saco el status bar.
  StatusBar.setHidden(true);
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

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressButton}
        onPress={() => setShowSearch((prev) => !prev)}
      >
        <Image style={{ width: 23, height: 23 }} source={searchIcon} />
        <MiniText><Text>Buscar</Text></MiniText>
      </Pressable>
      <Image style={styles.image} source={algoritmopedia} />
      <Pressable
        style={styles.pressButton}
        onPress={() => setShowMenu((prev) => !prev)}
      >
        <Image style={{ width: 26, height: 23 }} source={dotsIcon} />
        <MiniText><Text>Menú</Text></MiniText>
      </Pressable>

      <Modal
        visible={showMenu}
        onRequestClose={() => setShowMenu((prev) => !prev)}
        animationType="slide"
      >
        <MenuModal setShowMenu={setShowMenu} />
      </Modal>

      <Modal
        visible={showSearch}
        onRequestClose={() => setShowSearch((prev) => !prev)}
        transparent
        animationType="fade"
      >
        <SearchModal setShowSearch={setShowSearch} />
      </Modal>
    </View>
  );
}

export default Navbar;
