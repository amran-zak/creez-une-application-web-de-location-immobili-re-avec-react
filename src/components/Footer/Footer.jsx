import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Kasa. Tous droits réservés.</p>
    </footer>
  );
}
