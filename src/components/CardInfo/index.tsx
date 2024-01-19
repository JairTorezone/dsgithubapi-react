import './styles.css';

function CardInfo() {
  return (
    <div className="info-container">
      <div className="card-image"></div>
      <div className="card-info">
        <h3>Informações</h3>
        <ul>
          <li>Perfil: https://api.github.com/users/acenelio</li>
          <li>Seguidores: 4379</li>
          <li>Localidade: Uberlândia</li>
          <li>Nome: Nelio Alves</li>
        </ul>
      </div>
    </div>
  );
}

export default CardInfo;
