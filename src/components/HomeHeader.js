/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image, StyleSheet, View, StatusBar, SafeAreaView,
} from 'react-native';
import algoritmopedia from '../../assets/images/algoritmopediaclaro.png';

function HomeHeader() {
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
      width: 60,
      height: 50,
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
        <Image style={styles.image} source={algoritmopedia} />
      </View>
    </SafeAreaView>
  );
}

export default HomeHeader;
