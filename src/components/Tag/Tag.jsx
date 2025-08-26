import styles from "./Tag.module.scss";

export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}
