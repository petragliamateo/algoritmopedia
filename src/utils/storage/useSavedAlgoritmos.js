import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';

export default function useSavedAlgoritmos() {
  const [favorites, setFavorites] = React.useState([]);
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@favoritesData');
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      Alert.alert('Error', error);
      return null;
    }
  };
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@favoritesData', JSON.stringify(data));
      setFavorites(data);
    } catch (error) {
      Alert.alert('Error', error);
    }
  };
  const addFavorite = async (name) => {
    let saved = await getData();
    if (!saved) {
      saved = [];
    }
    saved = saved.concat(name);
    await saveData(saved);
    setFavorites(saved);
  };
  const removeFavorite = async (name) => {
    let saved = await getData();
    if (!saved || !saved.includes(name)) {
      return;
    }
    saved = saved.filter((item) => item !== name);
    await saveData(saved);
    setFavorites(saved);
  };
  React.useEffect(() => {
    // console.log('listener');
    const listener = async () => {
      const saved = await getData();
      if (saved) {
        setFavorites(saved);
        return;
      }
      setFavorites([]);
    };
    listener();
    return () => listener();
  }, []);
  const removeAllFavorites = async () => {
    try {
      await AsyncStorage.removeItem('@favoritesData');
      setFavorites([]);
      Alert.alert('Matias dice:', 'Favoritos eliminados');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return {
    favorites, addFavorite, removeFavorite, removeAllFavorites,
  };
}
