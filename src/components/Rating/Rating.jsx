import styles from "./Rating.module.scss";

export default function Rating({ value = 0, outOf = 5 }) {
  const v = Math.max(0, Math.min(outOf, Number(value)));
  return (
    <div className={styles.rating} aria-label={`Note ${v} sur ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => {
        const filled = i < v;
        return (
          <svg
            key={i}
            className={filled ? styles.filled : styles.empty}
            width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path d="M12 17.3l-6.16 3.6 1.64-6.98-5.2-4.52 7.01-.6L12 2l2.71 6.8 7.01.6-5.2 4.52 1.64 6.98z"/>
          </svg>
        );
      })}
    </div>
  );
}
