import axios from 'axios';

async function getRepo(id) {
  const response = await axios.get(`https://api.github.com/repositories/${id}`);
  return response.data;
}

export default getRepo;