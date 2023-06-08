import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './estilos.module.css';

export default function NavBar({ onSearch }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
        <button className={styles.navButton}>
          <Link to="/home">Home</Link>
        </button>
        <button className={styles.navButton}>
          <Link to="/create">Crear Pokemon</Link>
        </button>
        <button className={styles.navButton}>
          <Link to="/myPokemons">Mis Pokemones</Link>
        </button>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
