import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repo, idx) => {
          return (
            <RepositoryItem key={idx} repository={repo} />
          )
        })}
      </ul>
    </section>
  );
}