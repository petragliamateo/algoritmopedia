/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  Image, Pressable, StyleSheet, View, Modal,
} from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import MenuModal from '../screens/MenuModal';

import gear from '../../assets/icons/gear.png';
import gearFill from '../../assets/icons/gear-fill.png';
import houseStroke from '../../assets/icons/house-door.png';
import houseFill from '../../assets/icons/house-door-fill.png';
import searchIcon from '../../assets/icons/bookmark.png';
import searchIconFill from '../../assets/icons/bookmark-fill.png';

function NavbarBottom({ height }) {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();
  const state = useNavigationState((st) => st);

  useEffect(() => {
    if (state) {
      setCurrentScreen(state.routes[state.index].name);
    }
  }, [state]);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height,
      backgroundColor: '#fff',
      paddingHorizontal: 35,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    image: {
      width: 30,
      height: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setCurrentScreen('home');
          navigation.navigate('home');
        }}
      >
        {currentScreen === 'home' ? (
          <Image style={styles.image} source={houseFill} />
        ) : (
          <Image style={styles.image} source={houseStroke} />
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          setCurrentScreen('allAlgoritmos');
          navigation.navigate('allAlgoritmos', { saved: [] });
        }}
      >
        {currentScreen === 'allAlgoritmos' ? (
          <Image style={styles.image} source={searchIconFill} />
        ) : (
          <Image style={styles.image} source={searchIcon} />
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          setCurrentScreen('Configuración');
          navigation.navigate('Configuración');
        }}
      >
        {currentScreen === 'Configuración' ? (
          <Image style={styles.image} source={gearFill} />
        ) : (
          <Image style={styles.image} source={gear} />
        )}
      </Pressable>

      <Modal
        visible={showMenu}
        onRequestClose={() => setShowMenu((prev) => !prev)}
        animationType="slide"
      >
        <MenuModal setShowMenu={setShowMenu} />
      </Modal>

    </View>
  );
}

export default NavbarBottom;
