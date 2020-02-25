import axios from 'axios';

async function getRepos() {
  const response = await axios.get('https://api.github.com/users/Emichu/repos');
  return response.data;
}

export default getRepos;