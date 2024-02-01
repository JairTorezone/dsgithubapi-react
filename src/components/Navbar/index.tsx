import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <h3>Github APIs</h3>
      </Link>
    </nav>
  );
}

export default Navbar;
