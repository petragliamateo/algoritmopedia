import axios from 'axios';
import { Alert } from 'react-native';

const baseUrl = 'https://radiant-citadel-39413.herokuapp.com';

const getPosts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/api/allposts`);
    Alert.alert('Matias dice:', 'Algoritmos actualizados!');
    return result.data;
  } catch (error) {
    Alert.alert('Error', 'Error al cargar los algoritmos');
    console.log(error);
    return null;
  }
};

const getOnePost = async () => {};

export { getPosts, getOnePost };
