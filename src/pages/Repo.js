import React from 'react';
import getRepo from '../modules/api/GetRepo';
import { useParams } from 'react-router-dom';

const Repo = () => {
  // get the param from the url
  const { id } = useParams()
  const [repo, setRepo] = React.useState(null);

  /**
   * async useEffect to make an api call to get the data for a given repo
   * store that data in state
   */
  React.useEffect(() => {
    async function fetchRepo() {
      const response = await getRepo(id);
      setRepo(response)
    }

    fetchRepo();
  }, [id])

  if (repo) {
    return (
      <div className="container">
        <h3 className="ui center aligned header">Information about repo '{repo.name}'</h3>
        <div className="ui segment">
          <p>What this repo is about: {repo.description}</p>
        </div>
        <div className="ui segment">
          <p>Language: {repo.language}</p>
          <p>Size: {repo.size}</p>
          <p>Created: {repo.created_at}</p>
          <p>Updated: {repo.updated_at}</p>
          <p>Pushed: {repo.pushed_at}</p>
        </div>
      </div>
    );
  }

  return <p>Loading ...</p>
};

export default Repo;