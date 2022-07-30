import axios from 'axios';

const baseUrl = 'http://192.168.0.217:3003';

const getPosts = async () => {
  try {
    const result = await axios.get(`${baseUrl}/allposts`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const getOnePost = async () => {};

export { getPosts, getOnePost };
