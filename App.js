/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { getPosts } from './src/services/algoritmos';

import Navigation from './src/navigation/Navigation';
import AlgoritmosContext from './src/contexts/AlgoritmosContext';

export default function App() {
  const [algoritmos, setAlgoritmos] = React.useState([]);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@algoritmosData');
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      alert(error);
      return null;
    }
  };
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@algoritmosData', JSON.stringify(data));
      setAlgoritmos(data);
    } catch (error) {
      alert(error);
    }
  };
  const reloadData = async () => {
    const data = await getPosts();
    if (data) {
      await saveData(data);
    }
  };
  React.useEffect(() => {
    const listener = async () => {
      const algData = await getData();
      if (algData) {
        setAlgoritmos(algData);
      } else {
        await reloadData();
      }
    };
    listener();
    return () => listener();
  }, []);
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@algoritmosData');
      setAlgoritmos([]);
      Alert.alert('Matias dice:', 'Cache eliminado');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return (
    <AlgoritmosContext.Provider value={{ algoritmos, reloadData, removeData }}>
      <Navigation />
    </AlgoritmosContext.Provider>
  );
}
