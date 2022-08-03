/* eslint-disable react-native/no-inline-styles */
/* eslint-disable camelcase */
import {
  Image, View, StyleSheet, TextInput, Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
  useFonts, RobotoMono_400Regular,
} from '@expo-google-fonts/roboto-mono';
import AppLoading from 'expo-app-loading';

import { useNavigation } from '@react-navigation/native';
import searchIcon from '../../assets/icons/search.png';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#777777',
    width: '100%',
    padding: 5,
    alignSelf: 'center',
  },
  searchButton: {
    backgroundColor: '#2F7EC8',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

function Search({ searchTerm, setSearchTerm, autoFocus }) {
  // Idea del buscador: Si se usa para rederigir al screen AllAlgoritmos
  // --> Se le pasa el state y set por prop
  // Cuando se busca desde navBar o MainScreen se pasa el termino como prop en navigate
  // Entonces creo un state solo para el navbar o mainScreen
  const [submitTerm, setSubmitTerm] = useState('');
  const navigation = useNavigation();

  const handleChange = (text) => {
    setSubmitTerm(text);
    if (setSearchTerm) {
      setSearchTerm(text);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('allAlgoritmos', { term: submitTerm });
  };

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{
          alignSelf: 'center',
          color: '#777777',
          maxWidth: '80%',
          fontSize: 16,
          fontFamily: 'RobotoMono_400Regular',
        }}
        placeholder="Buscar algoritmo"
        onChangeText={(target) => handleChange(target)}
        value={searchTerm}
        autoFocus={autoFocus}
      />
      <Pressable
        style={styles.searchButton}
        onPress={handleSubmit}
      >
        <Image
          style={{ width: 17, height: 17, transform: [{ rotate: '90deg' }] }}
          source={searchIcon}
        />
      </Pressable>
    </View>
  );
}

export default Search;
