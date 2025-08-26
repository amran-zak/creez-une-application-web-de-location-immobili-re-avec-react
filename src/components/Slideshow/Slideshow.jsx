import { useState, useCallback, useMemo } from "react";
import styles from "./Slideshow.module.scss";

/**
 * Props:
 * - images: string[] (URLs)
 * - altBase: string (ex: titre du logement)
 * - className?: string
 */
export default function Slideshow({ images = [], altBase = "photo", className = "" }) {
  const n = images.length;
  const [index, setIndex] = useState(0);
  const hasMany = n > 1;

  const next = useCallback(() => {
    if (!hasMany) return;
    setIndex((i) => (i + 1) % n);
  }, [hasMany, n]);

  const prev = useCallback(() => {
    if (!hasMany) return;
    setIndex((i) => (i - 1 + n) % n);
  }, [hasMany, n]);

  // Pour des alt accessibles mais concis
  const alt = useMemo(() => `${altBase} — image ${index + 1} sur ${n}`, [altBase, index, n]);

  if (n === 0) {
    return <div className={`${styles.slideshow} ${className}`} aria-label="Aucune image disponible" />;
  }

  return (
    <section
      className={`${styles.slideshow} ${className}`}
      role="region"
      aria-roledescription="carrousel"
      aria-label={altBase}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
    >
      {/* image */}
      <img
        key={index}              // redéclenche l'anim CSS au changement
        src={images[index]}
        alt={alt}
        className={styles.image}
        loading="eager"
      />

      {/* flèches (cachées si une seule image) */}
      {hasMany && (
        <>
          <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={prev} aria-label="Image précédente">
            <svg width="28" height="28" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={next} aria-label="Image suivante">
            <svg width="28" height="28" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </>
      )}

      {/* compteur */}
      {hasMany && (
        <div className={styles.counter} aria-live="polite">
          {index + 1}/{n}
        </div>
      )}
    </section>
  );
}
