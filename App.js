/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import {
  getCategories, getInfo, getPages, getPosts,
} from './src/services/algoritmos';

import Navigation from './src/navigation/Navigation';
import AlgoritmosContext from './src/contexts/AlgoritmosContext';

export default function App() {
  const [algoritmosData, setAlgoritmosData] = React.useState({
    algoritmos: [], categorias: [], pages: [],
  });

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@algoritmosData');
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      Alert.alert('Error', error);
      return null;
    }
  };
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@algoritmosData', JSON.stringify(data));
      setAlgoritmosData(data);
    } catch (error) {
      Alert.alert('Error', error);
    }
  };
  const reloadData = async () => {
    const algoritmos = await getPosts();
    const categorias = await getCategories();
    const pages = await getPages();
    const data = { algoritmos, categorias, pages };
    if (data) {
      await saveData(data);
      Alert.alert('Matias dice:', 'Algoritmos actualizados!');
    }
  };
  React.useEffect(() => {
    const listener = async () => {
      const algData = await getData();
      // Si no hay storage en el movil pregunto si deseo cargar:
      if (algData) {
        setAlgoritmosData(algData);
      } else {
        Alert.alert(
          'Matias dice:',
          'No se han encontrado datos, desea cargarlos?',
          [
            { text: 'cancel', style: 'cancel' },
            { text: 'Si', onPress: () => reloadData() },
          ],
        );
      }
      // Check si hay algoritmos nuevos
      const info = await getInfo();
      const algCount = Number(info.substring(info.lastIndexOf(' ') + 1));
      if (algCount === algData.algoritmos.length) {
        Alert.alert('Matias dice:', 'Algoritmos al dia');
        return;
      }
      Alert.alert(
        'Matias dice:',
        'Hay algoritmos nuevos! Desea actualizar?',
        [
          { text: 'cancel', style: 'cancel' },
          { text: 'Si', onPress: () => reloadData() },
        ],
      );
    };

    listener();

    return () => listener();
  }, []);
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@algoritmosData');
      setAlgoritmosData({
        algoritmos: [], categorias: [], pages: [],
      });
      Alert.alert('Matias dice:', 'Cache eliminado');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return (
    <AlgoritmosContext.Provider value={{
      algoritmos: algoritmosData.algoritmos,
      categorias: algoritmosData.categorias,
      pages: algoritmosData.pages,
      reloadData,
      removeData,
    }}
    >
      <Navigation />
    </AlgoritmosContext.Provider>
  );
}
