import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logoHead from '../../assets/LOGO.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo} aria-label="Kasa">
          <img src={logoHead} alt='logo kasa' className="kasa-logo-header" />
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`.trim()
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`.trim()
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
