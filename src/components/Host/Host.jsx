import styles from "./Host.module.scss";

export default function Host({ name, picture }) {
  return (
    <div className={styles.host}>
      <span className={styles.name}>{name}</span>
      <img className={styles.avatar} src={picture} alt={name} />
    </div>
  );
}
