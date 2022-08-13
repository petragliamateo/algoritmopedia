import axios from 'axios';
import { Alert } from 'react-native';

const baseUrl = 'https://radiant-citadel-39413.herokuapp.com';

const getPosts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/api/allposts`);
    return result.data;
  } catch (error) {
    Alert.alert('Error', 'Error al cargar los algoritmos');
    console.log(error);
    return null;
  }
};

const getCategories = async () => {
  try {
    const result = await axios.get(`${baseUrl}/api/categorias`);
    return result.data;
  } catch (error) {
    Alert.alert('Error', 'Error del servidor.');
    console.log(error);
    return null;
  }
};

const getPages = async () => {
  try {
    const copa = await axios.get(`${baseUrl}/api/pages/copa`);
    const retos = await axios.get(`${baseUrl}/api/pages/retos`);
    return [copa.data, retos.data];
  } catch (error) {
    Alert.alert('Error', 'Error del servidor.');
    console.log(error);
    return null;
  }
};

const getOnePost = async () => {};

export {
  getPosts, getOnePost, getCategories, getPages,
};
