import './styles.css';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import CardInfo from 'components/CardInfo';

function SearchApi() {
  return (
    <>
      <Navbar />
      <div className="search-container">
        <div className="search-main">
          <div className="content-search">
            <h1>Encontre um perfil Github</h1>
            <form action="">
              <div className="wrapper-input">
                <label htmlFor="name">Usuário Github</label>
                <input type="text" placeholder="Usuário Github" />
              </div>
              <Button title="Encontrar" />
            </form>
          </div>
          <div className="content-info">
            <CardInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchApi;
