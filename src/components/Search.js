/* eslint-disable react-native/no-inline-styles */
/* eslint-disable camelcase */
import {
  Image, View, StyleSheet, TextInput, Pressable,
} from 'react-native';
import React from 'react';
import {
  useFonts, RobotoMono_400Regular,
} from '@expo-google-fonts/roboto-mono';

import searchIcon from '../../assets/icons/search.svg';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#777777',
    width: '80%',
    padding: 5,
    alignSelf: 'center',
  },
  searchButton: {
    backgroundColor: '#2F7EC8',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

function Search() {
  useFonts({
    RobotoMono_400Regular,
  });
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{
          alignSelf: 'center',
          color: '#777777',
          width: '100%',
          fontSize: 16,
          fontFamily: 'RobotoMono_400Regular',
        }}
        placeholder="Buscar algoritmo"
      />
      <Pressable style={styles.searchButton}>
        <Image
          style={{ width: 17, height: 17, transform: 'rotate(90deg)' }}
          source={{ uri: searchIcon }}
        />
      </Pressable>
    </View>
  );
}

export default Search;
