import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./Accommodation.module.scss";

export default function Accommodation() {
  const { id } = useParams();
  const logement = data.find((l) => l.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  return (
    <div className={styles.page}>
      <Slideshow images={logement.pictures} altBase={logement.title} />

      <header className={styles.header}>
        <div className={styles.left}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.location}>{logement.location}</p>
          <div className={styles.tags}>
            {logement.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rating}><Rating value={parseInt(logement.rating, 10)} /></div>
          <div className={styles.host}><Host name={logement.host.name} picture={logement.host.picture} /></div>
        </div>

      </header>

      <section className={styles.panels}>
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          <ul className={styles.equipList}>
            {logement.equipments.map((eq) => <li key={eq}>{eq}</li>)}
          </ul>
        </Collapse>
      </section>
    </div>
  );
}
