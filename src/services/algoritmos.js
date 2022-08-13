import axios from 'axios';
import { Alert } from 'react-native';

const baseUrl = 'https://radiant-citadel-39413.herokuapp.com';

const getPosts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/api/allposts`);
    // const copa = await axios.get(`${baseUrl}/api/copa`);
    Alert.alert('Matias dice:', 'Algoritmos actualizados!');
    return result.data;
  } catch (error) {
    Alert.alert('Error', 'Error al cargar los algoritmos');
    console.log(error);
    return null;
  }
};

// getCopa (from /api/copa) que se recargue cada vez que se actualizan los algoritmos.

const getOnePost = async () => {};

export { getPosts, getOnePost };
