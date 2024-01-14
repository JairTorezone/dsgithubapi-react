import './styles.css';
import Navbar from 'components/Navbar';
import Button from 'components/Button';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <main>
        <div className="main-content">
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação</p>
          <Button />
        </div>
      </main>
    </div>
  );
}
export default Home;
