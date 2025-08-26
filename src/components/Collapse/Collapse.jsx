import { useState, useId } from "react";
import styles from "./Collapse.module.scss";

export default function Collapse({ title, children, defaultOpen = false, className = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <section className={`${styles.collapse} ${open ? styles.open : ""} ${className}`}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        id={`panel-${id}`}
        className={styles.content}
        role="region"
        aria-label={title}
        aria-hidden={!open}
      >
        <div className={styles.inner}>{children}</div>
      </div>
    </section>
  );
}
