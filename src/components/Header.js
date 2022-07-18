import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, View, Modal,
} from 'react-native';
import algoritmopedia from '../../assets/images/algoritmopediaclaro.png';
import { MenuModal } from '../screens';

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
});

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>Buscar</Text>
      <Image style={styles.image} source={{ uri: algoritmopedia }} />
      <Pressable onPress={() => setShowMenu((prev) => !prev)}>
        <Text>Menú</Text>
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
