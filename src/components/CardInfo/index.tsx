import './styles.css';

function CardInfo() {
  return (
    <div className="info-container">
      <div className="card-image">
        <img src="https://github.com/jairTorezone.png" alt="profile" />
      </div>
      <div className="card-info">
        <h3>Informações </h3>
        <ul>
          <li>
            <span>Perfil: </span>
            <a href="/">https://api.github.com/users/acenelio</a>
          </li>
          <li>
            <span>Seguidores:</span> 43791
          </li>
          <li>
            <span>Localidade:</span> Uberlândia
          </li>
          <li>
            <span>Nome:</span> Nelio Alves
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardInfo;
