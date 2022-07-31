import axios from 'axios';

const baseUrl = 'http://192.168.43.184:3003';

const getPosts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/allposts`);
    alert('Algoritmos actualizados!');
    return result.data;
  } catch (error) {
    alert(error);
    return [];
  }
};

const getOnePost = async () => {};

export { getPosts, getOnePost };
