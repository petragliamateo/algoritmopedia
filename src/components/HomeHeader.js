/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image, StyleSheet, View, StatusBar, SafeAreaView, Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RegularText } from '../customComponents/TextComponents';

import algoritmopedia from '../../assets/images/algoritmopediaclaro.png';
import searchIcon from '../../assets/icons/searchBlack.png';

function HomeHeader() {
  const navigation = useNavigation();

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
      width: 30,
      height: 30,
    },
    spaced: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView>
      <StatusBar
        animated
        backgroundColor="#2F7EC8"
        hidden={false}
      />
      <View style={styles.container}>
        <RegularText bold>Algoritmopedia</RegularText>

        <Pressable onPress={() => navigation.navigate('allAlgoritmos')}>
          <Image style={styles.image} source={searchIcon} />
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

export default HomeHeader;
