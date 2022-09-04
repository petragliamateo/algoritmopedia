import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';

export default function useFirstTime() {
  const [firstTime, setFirstTime] = React.useState('init');
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@firstTime');
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      Alert.alert('Error', error);
      return null;
    }
  };
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@firstTime', JSON.stringify(data));
      setFirstTime(data);
    } catch (error) {
      Alert.alert('Error', error);
    }
  };
  const setFirstTimeData = async () => {
    await saveData('no');
    setFirstTime('no');
  };
  React.useEffect(() => {
    // console.log('listener');
    const listener = async () => {
      const data = await getData();
      if (data === 'no') {
        setFirstTime('no');
        return;
      }
      setFirstTime('si');
    };
    listener();
    return () => listener();
  }, []);
  const removeFirstTimeData = async () => {
    try {
      await AsyncStorage.removeItem('@firstTime');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return {
    firstTime, setFirstTimeData, removeFirstTimeData,
  };
}
