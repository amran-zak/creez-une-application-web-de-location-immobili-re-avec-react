import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <section className={styles.wrapper} aria-labelledby="nf-title">
      <h1 id="nf-title" className={styles.code}>404</h1>
      <p className={styles.text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.back}>
        {'Retourner sur la page d’accueil'}
      </Link>
    </section>
  );
}
