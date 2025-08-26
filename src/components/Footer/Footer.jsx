// src/components/Footer/Footer.jsx
import styles from "./Footer.module.scss";
import logoFooter from "../../assets/LOGOFOOTER.png";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <img src={logoFooter} alt="Kasa" className={styles.logo} />
        <p className={styles.legal}>
          © {new Date().getFullYear()} Kasa. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
