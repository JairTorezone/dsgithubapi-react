import CardInfo from 'components/CardInfo';
import { useState } from 'react';
import axios from 'axios';

import './styles.css';

type FormData = {
  git: string;
};

type Github = {
  url: string;
  followers: string;
  location: string;
  name: string;
  login: string;
};

function SearchApi() {
  const [github, setGithub] = useState<Github>();

  const [formData, setFormData] = useState<FormData>({
    git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setGithub(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert('Github não encontrado');
        setGithub(undefined);
        console.log(error);
      });
  }

  return (
    <>
      <div className="search-container">
        <div className="search-main">
          <div className="content-search">
            <h1>Encontre um perfil Github</h1>

            <form onSubmit={handleSubmit}>
              <div className="wrapper-input">
                <label htmlFor="name">Pesquisar usuário Github</label>

                <input
                  type="text"
                  name="git"
                  value={formData.git}
                  placeholder="Usuário Github"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-search">
                Buscar
              </button>
            </form>
          </div>

          {github && (
            <>
              <div className="content-info">
                <div className="card-image">
                  <img
                    src={`https://github.com/${github.login}.png`}
                    alt="profile"
                  />
                </div>

                <CardInfo
                  url={github.url}
                  followers={github.followers}
                  location={github.followers}
                  name={github.name}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchApi;
