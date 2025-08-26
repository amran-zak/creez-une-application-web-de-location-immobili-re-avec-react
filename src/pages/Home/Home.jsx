import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";
import data from "../../data/logements.json";
import heroHome from "../../assets/bgheader.png"

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner
        image={heroHome}
        title="Chez vous, partout et ailleurs"
      />
      <section className={styles.grid} aria-label="Liste des logements">
        {data.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </div>
  );
}
