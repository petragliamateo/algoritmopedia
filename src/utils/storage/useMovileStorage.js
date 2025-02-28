import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';
import { removeCommonFooter } from '../../helpers/formatHtml';
import {
  getCategories, getInfo, getPages, getPosts,
} from '../../services/algoritmos';
import downloadAllImages from './downloadAllImages';
import useFirstTime from './useFirstTime';
import useSavedAlgoritmos from './useSavedAlgoritmos';

export default function useMovileStorage() {
  const [algoritmosData, setAlgoritmosData] = React.useState({
    algoritmos: [], categorias: [], pages: [],
  });
  const [reloadListener, setReloadListener] = React.useState(false);
  const { removeAllFavorites } = useSavedAlgoritmos();
  const { removeFirstTimeData, firstTime } = useFirstTime();

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
    await downloadAllImages(algoritmos.map((a) => removeCommonFooter(a.post_content)));
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
      if (algData && !Array.isArray(algData)) {
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
        // Alert.alert('Matias dice:', 'Algoritmos al dia');
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

    if (firstTime === 'no') listener();

    return () => listener();
  }, [reloadListener]);
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@algoritmosData');
      await removeAllFavorites();
      await removeFirstTimeData();
      setAlgoritmosData({
        algoritmos: [], categorias: [], pages: [],
      });
      Alert.alert('Matias dice:', 'Cache eliminado');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return {
    ...algoritmosData, removeData, reloadData, setReloadListener,
  };
}
