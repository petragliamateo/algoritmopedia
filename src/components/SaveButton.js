import {
  Image, View, StyleSheet, Pressable, Text,
} from 'react-native';
import React from 'react';

import mark from '../../assets/icons/bookmark.png';
import markFill from '../../assets/icons/bookmark-fill.png';
import { RegularText } from '../customComponents/TextComponents';
import useSavedAlgoritmos from '../utils/storage/useSavedAlgoritmos';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#777777',
    width: '100%',
    padding: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
});

function SaveButton({ name }) {
  const { favorites, addFavorite, removeFavorite } = useSavedAlgoritmos();
  return (
    <View style={styles.inputContainer}>
      <RegularText><Text>Guarda este post!</Text></RegularText>
      {favorites.includes(name) ? (
        <Pressable onPress={() => removeFavorite(name)}>
          <Image style={styles.icon} source={markFill} />
        </Pressable>
      ) : (
        <Pressable onPress={() => addFavorite(name)}>
          <Image style={styles.icon} source={mark} />
        </Pressable>
      )}
    </View>
  );
}

export default SaveButton;
