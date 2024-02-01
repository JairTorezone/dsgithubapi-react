import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  title: string;
};

function Button({ title }: Props) {
  return (
    <Link to="/gitsearch">
      <button>{title}</button>
    </Link>
  );
}

export default Button;
