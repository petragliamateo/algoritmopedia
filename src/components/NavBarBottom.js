/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  Image, Pressable, StyleSheet, View, Modal, useWindowDimensions,
} from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import MenuModal from '../screens/MenuModal';

import dotsIcon from '../../assets/icons/three-dots.png';
import houseStroke from '../../assets/icons/house-door.png';
import houseFill from '../../assets/icons/house-door-fill.png';
import searchIcon from '../../assets/icons/searchBlack.png';
import searchIconFill from '../../assets/icons/search-heart-fill.png';

function NavbarBottom() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const { height } = useWindowDimensions();
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
      height: 60,
      backgroundColor: '#fff',
      paddingHorizontal: 25,
      position: 'absolute',
      top: height - 60,
      width: '100%',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    image: {
      width: 32,
      height: 32,
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
          navigation.navigate('allAlgoritmos');
        }}
      >
        {currentScreen === 'allAlgoritmos' ? (
          <Image style={styles.image} source={searchIconFill} />
        ) : (
          <Image style={styles.image} source={searchIcon} />
        )}
      </Pressable>

      <View style={styles.image} />

      <Pressable
        onPress={() => setShowMenu((prev) => !prev)}
      >
        <Image style={styles.image} source={dotsIcon} />
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
