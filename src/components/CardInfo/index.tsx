import './styles.css';

type Props = {
  url: string;
  followers: string;
  location: string;
  name: string;
};

function CardInfo({ url, followers, location, name }: Props) {
  return (
    <div className="card-info">
      <h3>Informações </h3>
      <ul>
        <li>
          <span>Perfil: </span>
          <a href={url} target="_blank">
            {url}
          </a>
        </li>
        <li>
          <span>Seguidores:</span> {followers}
        </li>
        <li>
          <span>Localidade:</span> {location}
        </li>
        <li>
          <span>Nome:</span> {name}
        </li>
      </ul>
    </div>
  );
}

export default CardInfo;
