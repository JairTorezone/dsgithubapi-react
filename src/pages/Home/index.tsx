import './styles.css';

import Button from 'components/Button';

function Home() {
  return (
    <div className="home-container">
      <main>
        <div className="main-content">
          <div className="main-description">
            <h1>Desafio Github API</h1>
            <p>DevSuperior - Escola de programação</p>
          </div>
          <Button title="Começar" />
        </div>
      </main>
    </div>
  );
}
export default Home;
