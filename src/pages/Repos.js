import React from 'react';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import getRepos from '../modules/api/GetRepos'


const Repos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    async function fetchRepos() {
      const response = await getRepos()
      setList(response)
    }

    fetchRepos()
  }, [])

  return (
    <div>
      <div>
        <SearchBar onChange={setSearchTerm} />
      </div>
      <div>
        <List data={list.filter((item) => item.name.toLowerCase().includes(searchTerm))} />
      </div>
    </div>
  );
};

export default Repos;