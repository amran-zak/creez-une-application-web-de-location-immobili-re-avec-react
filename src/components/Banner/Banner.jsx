import styles from "./Banner.module.scss";

/**
 * Props:
 * - image?: string (optionnelle)
 * - title?: string
 * - overlay?: boolean (par défaut true)
 */
export default function Banner({ image, title, overlay = true }) {
  return (
    <div
      className={styles.banner}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      role="img"
      aria-label={title || "Bannière"}
    >
      {overlay && <div className={styles.overlay} aria-hidden="true" />}
      {title && <h1 className={styles.title}>{title}</h1>}
    </div>
  );
}
