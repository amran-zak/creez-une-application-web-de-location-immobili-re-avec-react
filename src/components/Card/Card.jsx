import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

/**
 * Props: id, title, cover
 */
export default function Card({ id, title, cover }) {
  return (
    <Link
      to={`/logement/${id}`}
      className={styles.card}
      aria-label={`Voir le logement ${title}`}
    >
      <div className={styles.thumb}>
        <img src={cover} alt={`Couverture ${title}`} loading="lazy" />
      </div>
      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
